class SessionController < ApplicationController

  before_action :authenticate, :only => [:new]

  def new
    #Show login form
  end

  def create
    #Process the login form
    user = User.find_by :email => params[:email]

    if user.present? && user.authenticate( params[:password] )
      session[:user_id] = user.id
      flash[:success] = "Successfully logged in"
      redirect_to root_path
    else
      flash[:error] = "Invalid email or password"
      redirect_to login_path
    end

  end

  def destroy
    #Destroy session detail
    session[:user_id] = nil
    flash[:success] = "Successfully logged out"
    redirect_to login_path
  end

  private
    def authenticate
      redirect_to user if @current_user
    end

end
