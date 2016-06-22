# class WsController < FayeRails::Controller
#
#   before_action :fetch_user
#
#   def inital_transmit
#     puts "\n\n\nHELLO\n\n\n"
#     byebug
#     if @current_user.present?
#       Ws.users[@current_user.id] = connection
#       Ws.users[@current_user.id].send_message('user_id', @current_user.id)
#       Ws[:user_id].trigger(:user, @current_user.id)
#       get_all_messages(@current_user)
#       get_all_users(@current_user)
#     end
#   end
#
#   def get_all_messages(user)
#     messages = Message.all
#     user_messages = []
#     messages.each do |msg|
#       if msg.user_id == user.id || msg.target == user.id
#         user_messages << msg
#       end
#     end
#     Ws.users[user.id].send_message('messages', user_messages)
#   end
#
#   def get_all_users(user)
#     byebug
#     all_users = User.all
#     other_users = []
#     all_users.each do |u|
#       if u.id != user.id
#         new_user = {id: u.id,
#                     name: u.first + ' ' + u.last[0],
#                     image: u.image}
#         other_users << new_user
#       end
#     end
#     Ws.users[user.id].send_message('users', other_users)
#   end
#
#   def create_message
#     @new_msg = Message.create message
#     if @new_msg.save
#       sender = @new_msg.user_id.to_s
#       receiver = @new_msg.target.to_s
#       Ws[sender].trigger(:msg_update, @new_msg)
#       Ws[receiver].trigger(:msg_update, @new_msg)
#     end
#   end
#
#   def mark_as_read
#     msg_to_update = Message.find(message)
#     msg_to_update.update :seen => true
#   end
#
#   def goodbye
#   end
#
#
#   private
#   def fetch_user
#     @current_user = User.find_by :id => session[:user_id] if session[:user_id].present?
#     session[:user_id] = nil unless @current_user.present?
#   end
# end
