# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
    get('/products')
- Show
    get('/products/:id')

- Create [token required]
    Request Body:
        post('/products') 
        Request body:
        {
            "name": "Product name",
            "price": "100"
        }

#### Users
- Index [token required]
    get('/users')

- Show [token required]
    get('/users/:id')

- Create 
    Request Body:
        post('/users') 
        Request body:
        {
            "firstname": "Fai",
            "lastname": "Alqarni",
            "email": "fai@email.com",
            "password": "12345678"
        }

- Login 
    Request Body:
        post('/login') 
        Request body:
        {
            "email": "fai@email.com",
            "password": "12345678"
        }

#### Orders
- Create order [token required]
    Request Body:
        post('/orders')
        Request body:
        {
            "user_id": 1,
            "status": "Active"
        }

- Add Product to Cart [token required]
    Request Body:
        post('/carts')
        Request body:
        {
            "order_id": 1,
            "product_id": 1,
            "quantity": 1
        }

- Show Cart [token required]
    get('/carts/:id')

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

