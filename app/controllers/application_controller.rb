class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActiveStorage::Blob::Analyzable
  before_action :authorized
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_error

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def authorized
    unless current_user
      render json: { message: 'Not authorized' }, status: 401
    end
  end

  def not_found_error(error)
    render json: {error: error.message}, status: :not_found
  end

  def invalid_record_error(error)
    render json: {errors: error.record.errors.full_messages}, status: 422
  end
end

