import { Order } from '../src/models/order'
import { User } from '../src/models/user'
import supertest from 'supertest'
import app from '../src/server'
import jwt from 'jsonwebtoken'


const order = new Order()
const user = new User()
let newUser 
let token = ''

describe('Order Unit Test', function() {
  
  beforeAll(async function() {
    // create user
    newUser = await user.create({
      firstname: 'test',
      lastname: 'user',
      email: 'testorder@email.com',
      password: '12345678'
    })
    token = jwt.sign(newUser, process.env.JWT_KEY as string)
    // create order
    await order.create({
      user_id: 1,
      status: 'Active'
    })
  });

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
        .set({'Authorization': 'Bearer ' + token})
        .send({
          user_id: 1,
          status: 'Active'
        });
      expect(response.statusCode).toBe(201);
    });

    it('index should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/orders')
        .set({'Authorization': 'Bearer ' + token})
      expect(response.statusCode).toBe(200);
    });

    it('show should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/orders/1')
        .set({'Authorization': 'Bearer ' + token})
      expect(response.statusCode).toBe(200);
    });
  });
});
