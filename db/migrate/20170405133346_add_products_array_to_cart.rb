class AddProductsArrayToCart < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :product_ids, :integer, array: true, default: [] 
  end
end
