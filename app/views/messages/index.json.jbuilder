json.array!(@messages) do |message|
  json.extract! message, :id, :user_id, :group_id, :content, :image, :typing
  json.user message.user, :name
  json.url message_url(message, format: :json)
end
