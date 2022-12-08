import { User } from '../src/models/user'

const user = new User()


describe('Testing User Endpoint', function() {
  
  it('should have an index method', () => {
    expect(user.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(user.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(user.create).toBeDefined();
  });

  it('index method should return users', async function() {
    const result = await user.index()
    expect(result).toEqual([])
  });
});
