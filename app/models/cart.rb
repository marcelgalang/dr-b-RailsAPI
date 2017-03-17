class Cart < ApplicationRecord
  has_many :service_cart_joins
  has_many :services, through: :service_cart_joins
  belongs_to :user
end
