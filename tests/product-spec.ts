import { Product } from '../src/models/product'
import { User } from '../src/models/user'
import supertest from 'supertest'
import app from '../src/server'
import jwt from 'jsonwebtoken'

const user = new User()
let newUser 
let token = ''
const product = new Product()

describe('Product Unit Test', function() {

  beforeAll(async function() {
    // create product
    await product.create({
      name: 'Test Product2',
      price: 30
    })
    // create user
    newUser = await user.create({
      firstname: 'test',
      lastname: 'user2',
      email: 'testproduct@email.com',
      password: '12345678'
    })
    token = jwt.sign(newUser, process.env.JWT_KEY as string)
  });

  describe('Testing Product Functions', function() {
    
    it('should have an index method', () => {
      expect(product.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(product.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(product.create).toBeDefined();
    });

    it('index method should return products', async function() {
      const result = await product.create({
        name: 'Product 1',
        price: 40
      })
      // should not return null or undefined
      expect(result).toBeTruthy()
    });

    it('index method should return users', async function() {
      const result = await product.index()
      expect(result).toBeTruthy() // should not return null or undefined
    });

    it('show method should return user', async function() {
      const result = await product.show(1) // the user created in the prev steps
      expect(result).toBeTruthy() // should not return null or undefined
    });
  });

  describe('Testing Product Endpoints', function() {
    it('Create a product should have status code: 201', async function() {
      const response = await supertest(app)
        .post('/products')
        .set({'Authorization': 'Bearer ' + token})
        .send({
          name: 'Product name 2',
          price: 50
        });
      expect(response.statusCode).toBe(201);
    });

    it('index should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/products');
      expect(response.statusCode).toBe(200);
    });

    it('show should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/products/1');
      expect(response.statusCode).toBe(200);
    });
  });
});
