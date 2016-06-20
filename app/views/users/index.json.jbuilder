json.array!(@users) do |user|
  json.extract! user, :id, :name, :email, :password_digest, :admin, :image
  json.url user_url(user, format: :json)
end
