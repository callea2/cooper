class ApplicationController < ActionController::Base
  skip_before_filter :verify_authenticity_token
  include DeviseTokenAuth::Concerns::SetUserByToken
  respond_to :json
end
