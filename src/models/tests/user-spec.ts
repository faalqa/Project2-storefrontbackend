import { User } from '../user'

const user = new User()

describe('User Endpoint', function() {

  describe('Testing the signup endpoint', function() {
    console.log('I am in the user test (describe)')
    it('should have an index method', () => {
        expect(user.index).toBeDefined();
    });

    it('creates an account', async function() {
        console.log('I am in the user test (it)')
        const result = await user.index()
        expect(result).toEqual([])
      // status code should be 201 `Created`
    //   const response = await supertest(app)
    //     .post('/users')
    //     .send({
    //       firstname: 'test',
    //       lastname: 'test',
    //       email: 'test@test.com',
    //       password: '12345678',
    //     });
    //   expect(response.statusCode).toBe(201);
    });

    // Failure scenarios
//     it('returns 400 if an account existed with the same email address', async function() {
//       // status code should be 201 `Created`
//       const createUser1Response = await supertest(app)
//         .post('/users')
//         .send({
//           firstname: 'test',
//           lastname: 'test',
//           email: 'test@test.com',
//           password: '12345678',
//         });
//       expect(createUser1Response.statusCode).toBe(201);

//       // status code should be 400
//       const createUser2Response = await supertest(app)
//         .post('/users')
//         .send({
//           firstname: 'test',
//           lastname: 'test',
//           email: 'test@test.com',
//           password: '12345678',
//         });
//       expect(createUser2Response.statusCode).toBe(400);
//     });
  });

});
