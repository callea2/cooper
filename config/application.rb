require File.expand_path('../boot', __FILE__)

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"

Bundler.require(*Rails.groups)

module CooperChallange
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true

    config.generators do |generate|
      generate.helper false
      generate.assets false
      generate.view_specs false
    end

    config.middleware.insert_before 0, 'Rack::Cors' do
      allow do
        origins '*'
        resource '*',
                 headers: :any,
                 methods: [:get, :post, :delete, :put, :options, :head],
                 expose: %w(access-token expiry token-type uid client),
                 max_age: 0
      end
    end
  end
end
