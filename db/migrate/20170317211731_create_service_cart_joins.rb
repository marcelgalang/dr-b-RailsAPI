class CreateServiceCartJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :service_cart_joins do |t|
      t.references :cart, foreign_key: true
      t.references :service, foreign_key: true

      t.timestamps
    end
  end
end
