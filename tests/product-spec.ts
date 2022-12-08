import { Product } from '../src/models/product'

const product = new Product()


describe('Testing product Endpoint', function() {
  
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
    const result = await product.index()
    expect(result).toEqual([])
  });
});
