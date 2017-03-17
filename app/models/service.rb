class Service < ApplicationRecord
  has_many :service_categories
  has_many :categories, through: :service_categories
  has_many :service_cart_joins
  has_many :carts, through: :service_cart_joins
end
