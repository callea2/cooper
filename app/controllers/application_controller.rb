class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  skip_before_filter :verify_authenticity_token
  respond_to :json
end
