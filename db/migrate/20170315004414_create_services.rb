class CreateServices < ActiveRecord::Migration[5.0]
  def change
    create_table :services do |t|
      t.string :title
      t.string :description
      t.integer :price

      t.timestamps
    end
  end
end
