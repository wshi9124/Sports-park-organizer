class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error

  def authorized
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  private
  def not_found_error(error)
    render json: {error: error.message}, status: :not_found
  end

  def invalid_record_error(error)
    render json: {error: error.record.errors.full_messages}, status: 422
  end
end
