class UsersController < ApplicationController
  before_action :authenticate, except: [:new, :create]
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authorise, :only => [:index]
  before_action :logged_in, :only => [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all.sort_by {|user| user.id}
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
    @user = @current_user
  end

  # POST /users
  # POST /users.json
  def create
    if params[:user]['image'].present?
      req = Cloudinary::Uploader.upload(params[:user]['image'])
      @user = User.new(user_params)
      @user.update :image => req['url']
    else
      @user = User.new(user_params)
      @user.update :image => 'http://www.priorlakeassociation.org/wp-content/uploads/2011/06/blank-profile.png'
    end

    if @user.save
      new_user = {id: @user.id,
                  name: @user.first + ' ' + @user.last[0],
                  image: @user.image}
      WebsocketRails[:user_create].trigger('created_user', new_user)
      session[:user_id] = @user.id
      redirect_to messages_path
    else
      render :new
    end

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    user = @current_user
    user.update user_params
    if params[:user]["image"].present?
      req = Cloudinary::Uploader.upload(params[:user]["image"])
      user.update(:image => req["url"])
    end

    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end

    redirect_to user_path
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :admin, :image)
    end

    def authorise
      redirect_to root_path unless (@current_user.present? && @current_user.admin?)
    end

    def logged_in
      redirect_to root_path unless @current_user.present?
    end

    def authenticate
      redirect_to '/login' unless @current_user
    end
end
