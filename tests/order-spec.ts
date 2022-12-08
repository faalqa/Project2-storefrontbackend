import { Order } from '../src/models/order'
import supertest from 'supertest'
import app from '../src/server'


const order = new Order()

describe('Order Unit Test', function() {
  describe('Testing Order Functions', function() {
    
    it('should have an index method', () => {
      expect(order.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(order.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(order.create).toBeDefined();
    });

    it('create method should create orders', async function() {
      const result = await order.create({
        user_id: 1,
        status: 'Active'
      })
      // should not return null or undefined
      expect(result).toBeTruthy()
    });

    it('index method should return orders', async function() {
      const result = await order.index()
      expect(result).toBeTruthy() // should not return null or undefined
    });

    it('show method should return order', async function() {
      const result = await order.show(1) // the user created in the prev steps
      expect(result).toBeTruthy() // should not return null or undefined
    });
  });

  describe('Testing order Endpoints', function() {
    it('Create a order should have status code: 201', async function() {
      const response = await supertest(app)
        .post('/orders')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA')
        .send({
          user_id: 1,
          status: 'Active'
        });
      expect(response.statusCode).toBe(201);
    });

    it('index should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/orders')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA');
      expect(response.statusCode).toBe(200);
    });

    it('show should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/orders/1')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA');
      expect(response.statusCode).toBe(200);
    });
  });
});
