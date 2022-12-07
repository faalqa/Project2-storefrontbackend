"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
const user = new user_1.User();
describe('User Endpoint', function () {
    describe('Testing the signup endpoint', function () {
        console.log('I am in the user test (describe)');
        it('should have an index method', () => {
            expect(user.index).toBeDefined();
        });
        it('creates an account', function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('I am in the user test (it)');
                const result = yield user.index();
                expect(result).toEqual([]);
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
