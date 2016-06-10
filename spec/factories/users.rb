FactoryGirl.define do
  factory :user do
    email "legit@email.com"
    password "password"
    password_confirmation "password"
  end
end
