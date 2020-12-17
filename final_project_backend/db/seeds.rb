# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create(name: "My First Product", description: "This is a test", category: "food", img_url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg", price: 20)
Product.create(name: "My Second Product", description: "This is also a test", category: "clothes", img_url: "https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg", price: 20)