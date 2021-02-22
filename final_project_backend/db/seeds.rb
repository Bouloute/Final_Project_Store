# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Product.create(name: "My First Product", description: "This is a test", category: "food", img_url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg", price: 20)
#Product.create(name: "My Second Product", description: "This is also a test", category: "clothes", img_url: "https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg", price: 20)
Product.create(name: "My First EVOO", description: "This is an EVOO", category: "EVOO", img_url: "https://thumbs.dreamstime.com/z/green-olives-19963898.jpg", price: 18)
Product.create(name: "My Second EVOO", description: "This is another EVOO", category: "EVOO", img_url: "https://thumbs.dreamstime.com/z/green-olives-19963898.jpg", price: 18)
Product.create(name: "My First Balsamic", description: "This is a Traditional Balsamic Vinegar", category: "B", img_url: "https://cdn.shopify.com/s/files/1/0923/5524/products/4-leaf-300x450_2048x.jpg?v=1587506184", price: 16)
Product.create(name: "Garlic Olive Oil", description: "This is a Garlic infused Olive Oil", category: "OO", img_url: "https://solidstarts.com/wp-content/uploads/garlic_edited-480x320@2x.jpg", price: 16)


User.create(name: "admin", email: "admin@admin.admin", password: "admin")