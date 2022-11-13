class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    @channel = params[:id]
    @username = params[:username]
    @user_id = params[:user_id]
    stream_from @channel
    # ActionCable.server.broadcast @channel, "#{@username} joined the channel ##{@channel}"
    # ActionCable.server.broadcast @channel, {username: @username, data: {message: "joined the channel ##{@channel}"}}
  end

  def receive(data)
    ActionCable.server.broadcast @channel, {user: @username, data: data, id: @user_id}
  end

  def unsubscribed
    # ActionCable.server.broadcast @channel, "#{@username} left the channel ##{@channel}"
    stop_all_streams
  end
  
end