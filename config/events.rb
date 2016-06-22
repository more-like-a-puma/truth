config.middleware.use FayeRails::Middleware, mount: '/faye', :timeout => 25 do
  # You can use this file to map incoming events to controller actions.
  # One event can be mapped to any number of controller actions. The
  # actions will be executed in the order they were subscribed.
  #
  # Uncomment and edit the next line to handle the client connected event:
  #   subscribe :client_connected, :to => Controller, :with_method => :method_name
  #
  # Here is an example of mapping namespaced events:
  #   namespace :product do
  #     subscribe :new, :to => ProductController, :with_method => :new_product
  #   end
  # The above will handle an event triggered on the client like `product.new`.

  # subscribe :login, 'ws#inital_transmit'
  # subscribe :client_disconnected, 'ws#goodbye'
  # subscribe :connection_closed, 'ws#goodbye'
  # subscribe :new_message, 'ws#create_message'
  # subscribe :mark_as_read, 'ws#mark_as_read'
end
