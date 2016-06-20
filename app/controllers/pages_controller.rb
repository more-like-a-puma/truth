class PagesController < ApplicationController
  before_action :authenticate

  def home
  end

  private
    def authenticate
      redirect_to '/login' unless @current_user
    end
end
