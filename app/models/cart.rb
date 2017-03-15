class Cart < ApplicationRecord
  has_many :ordered_services
  has_many :services, through: :ordered_services
  belongs_to :users
end
