class AddExternalIdtoCarts < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :external_id, :integer
  end
end
