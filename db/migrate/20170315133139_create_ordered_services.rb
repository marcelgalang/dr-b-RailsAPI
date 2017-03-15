class CreateOrderedServices < ActiveRecord::Migration[5.0]
  def change
    create_table :ordered_services do |t|
      t.references :service, foreign_key: true
      t.references :cart, foreign_key: true

      t.timestamps
    end
  end
end
