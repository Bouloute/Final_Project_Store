class CreateCartsProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts_products do |t|
      t.belongs_to  :cart #t.integer :cart_id
      t.belongs_to  :product
      t.integer :count
      
      t.timestamps
    end
  end
end
