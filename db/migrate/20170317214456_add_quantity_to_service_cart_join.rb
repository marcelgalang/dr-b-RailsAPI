class AddQuantityToServiceCartJoin < ActiveRecord::Migration[5.0]
  def change
    add_column :service_cart_joins, :quantity, :integer, default: 1
  end
end
