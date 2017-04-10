class AlterColumnQuantityByIdToCarts < ActiveRecord::Migration[5.0]
  def change
    rename_column :carts, :quantityById, :quantity_by_id

  end
end
