import { Cart } from '../src/models/cart'
import supertest from 'supertest'
import app from '../src/server'


const cart = new Cart()

describe('Cart Unit Test', function() {
  describe('Testing Cart Functions', function() {
    
    it('should have an index method', () => {
      expect(cart.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(cart.show).toBeDefined();
    });

    it('should have add to cart method', () => {
      expect(cart.addToCart).toBeDefined();
    });

    it('add to cart method should add products to carts', async function() {
      const result = await cart.addToCart({
        order_id: 1,
        product_id: 1,
        quantity: 50
      })
      // should not return null or undefined
      expect(result).toBeTruthy()
    });

    it('index method should return cart', async function() {
      const result = await cart.index()
      expect(result).toBeTruthy() // should not return null or undefined
    });

    it('show method should return cart', async function() {
      const result = await cart.show(1) // the user created in the prev steps
      expect(result).toBeTruthy() // should not return null or undefined
    });
  });

  describe('Testing Cart Endpoints', function() {
    it('Add to cart should have status code: 201', async function() {
      const response = await supertest(app)
        .post('/carts')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA')
        .send({
          order_id: 1,
          product_id: 1,
          quantity: 50
        });
      expect(response.statusCode).toBe(201);
    });

    it('index should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/carts')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA');
      expect(response.statusCode).toBe(200);
    });

    it('show should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/carts/1')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA');
      expect(response.statusCode).toBe(200);
    });
  });
});
