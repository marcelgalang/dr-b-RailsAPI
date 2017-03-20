products= [
['Glass', 'Replace cracked or broken glass', 95, 7,1],
['LCD/Digitizer Assembly', 'Replace LCD/Digitizer Assembly', 110, 8,1],
['Power Button', 'Replace Power Button', 100, 12,1]
]

products.each do |title, description, price, quantity, category_id|
  Product.create( title: title, description: description, price:price, quantity:quantity, category_id:category_id )
end
