import { User, TUser } from '../src/models/user'
import supertest from 'supertest'
import app from '../src/server'

const user = new User()
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZmlyc3RuYW1lIjoiTm9vciIsImxhc3RuYW1lIjoiTm9vciIsImVtYWlsIjoibm9vckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlZy5HWnVzYmlURjluMWJoV29kU1lPUDd2NTYvdVBnQTVLWE85eTMzYWhXM3JaVWtoeWhTRyIsImNyZWF0ZWRfYXQiOiIyMDIyLTEyLTA2VDIwOjI4OjA2LjMxNloiLCJpYXQiOjE2NzAzNTg0ODZ9.MB_CM6HBfF72Qw-7MA9RCdwS-eB3-FHXhLoYbnsRTcA'

describe('User Unit Test', function() {
  
  beforeAll(function() {
    // create user
    user.create({
      firstname: 'test',
      lastname: 'user2',
      email: 'testuser2@email.com',
      password: '12345678'
    })
  });

  describe('Testing User Functions', function() {
    
    
    it('should have an index method', () => {
      expect(user.index).toBeDefined();
    });

    it('should have a show method', () => {
      expect(user.show).toBeDefined();
    });

    it('should have a create method', () => {
      expect(user.create).toBeDefined();
    });

    it('create method should create users', async function() {
      const create = await user.create({
        firstname: 'user',
        lastname: 'name1',
        email: 'user1@email.com',
        password: '12345678'
      })
      // should not return null or undefined
      expect(create).toBeTruthy()
    });

    it('index method should return users', async function() {
      const result = await user.index()
      expect(result).toBeTruthy() // should not return null or undefined
    });

    it('show method should return user', async function() {
      const result = await user.show(1) // the user created in the prev steps
      expect(result).toBeTruthy() // should not return null or undefined
    });
  });
  describe('Testing User Endpoints', function() {
    it('Create a user should have status code: 201', async function() {
      const response = await supertest(app)
        .post('/users')
        .send({
          firstname: 'user',
          lastname: 'name2',
          email: 'user2@email.com',
          password: '12345678'
        });
      expect(response.statusCode).toBe(201);
    });
    it('Login should have status code: 200', async function() {
      const response = await supertest(app)
        .post('/login')
        .send({
          email: 'testuser@email.com',
          password: '12345678'
        });
      expect(response.statusCode).toBe(200);
    });

    it('index should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/users')
        .set({'Authorization': 'Bearer ' + token})
      expect(response.statusCode).toBe(200);
    });

    it('show should have status code: 200', async function() {
      const response = await supertest(app)
        .get('/users/1')
        .set({'Authorization': 'Bearer ' + token})
      expect(response.statusCode).toBe(200);
    });
  });
});
