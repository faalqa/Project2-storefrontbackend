import { Product } from '../src/models/product'
import supertest from 'supertest'
import app from '../src/server'


const product = new Product()

describe('Product Unit Test', function() {

  beforeAll(async function() {
    // create product
    await product.create({
      name: 'Test Product2',
      price: 30
    })
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
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA')
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
