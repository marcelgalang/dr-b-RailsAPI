class ChangeQuantityToInventory < ActiveRecord::Migration[5.0]
  def change
    rename_column :products, :quantity, :inventory
  end
end
