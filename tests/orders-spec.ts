import { Order } from '../src/models/order'

const order = new Order()


describe('Testing Order Endpoint', function() {
  
  it('should have an index method', () => {
    expect(order.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(order.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(order.create).toBeDefined();
  });

  it('index method should return orders', async function() {
    const result = await order.index()
    expect(result).toEqual([])
  });
});
