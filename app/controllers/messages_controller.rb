class MessagesController < ApplicationController
  before_action :authenticate
  before_action :set_message, only: [:show, :edit, :update, :destroy]

  # GET /messages
  # GET /messages.json
  def index
    @messages = Message.all
  end

  # GET /messages/1
  # GET /messages/1.json
  def show
  end

  # GET /messages/new
  def new
    @message = Message.new
  end

  # GET /messages/1/edit
  def edit
  end

  def home
    @groups = Group.all
  end

  # POST /messages
  # POST /messages.json
  def create
    @message = Message.new(message_params)
    @message.user_id = @current_user.id

    respond_to do |format|
      if @message.save
        message = JSON.parse @message.to_json
        message[:user] = @message.user

        cur_channel = "/messages/new/#{@current_user.target}"

        format.html { redirect_to @message, notice: 'Message was successfully created.' }
        format.json { render :show, status: :ok, location: @message }
      else
        format.html { render :new }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update
    respond_to do |format|
      if @message.update(message_params)
        format.html { redirect_to @message, notice: 'Message was successfully updated.' }
        # format.json { render :show, status: :ok, location: @message }
      else
        format.html { render :edit }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @message.destroy
    respond_to do |format|
      format.html { redirect_to messages_url, notice: 'Message was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def message_params
      params.require(:message).permit(:user_id, :group_id, :content, :image, :typing)
    end

    # Check user is logged in
    def authenticate
      redirect_to '/login' unless @current_user
    end

    # def broadcast(channel, data)
    #   message = { :channel => channel, :data => data }
    #   uri = URI.parse("http://localhost:9292/faye")
    #
    #   Net::HTTP.post_form(uri, :message => message.to_json)
    # end
end
