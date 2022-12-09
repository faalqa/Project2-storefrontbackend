# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index route: '/products' [GET]
- Show route: '/products/:id' [GET]
- Create route: '/products' [POST] [token required]
    Request Body:
        {
            "name": "Product name",
            "price": "100"
        }

#### Users
- Index route '/users' [GET] [token required]
- Show route: '/users/:id' [GET] [token required]
- Create route: '/users' [POST]
    Request Body:
        {
            "firstname": "Fai",
            "lastname": "Alqarni",
            "email": "fai@email.com",
            "password": "12345678"
        }
- Login route: '/login' [POST]
    Request Body:
        {
            "email": "fai@email.com",
            "password": "12345678"
        }

#### Orders
- Create order route: '/orders' [POST] [token required]
    Request Body:
        {
            "user_id": 1,
            "status": "Active"
        }
- Add Product to Cart route: '/carts' [POST] [token required]
    Request Body:
        {
            "order_id": 1,
            "product_id": 1,
            "quantity": 1
        }
- Show Cart route: '/carts/:id' [GET] [token required]

## Data Shapes
#### Product
- id
- name
- price

#### User
- id
- firstName
- lastName
- email
- password

#### Orders
- id
- user_id
- status (active or complete)

#### Cart
- id
- order_id
- product_id
- quantity of product


## Database Schema

![store_database_schema](https://user-images.githubusercontent.com/59806790/203865215-2e6e910c-0943-454b-854d-5d48f8e78696.jpg)

