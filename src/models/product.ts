import Client from '../database'

export type TProduct = {
    id?: number;
    name: string;
    price: number;
    ceated_at?: string;
}
export class Product {
    async index(): Promise<TProduct[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM products'
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get products ${error}`)
        }
    }

    async show(id: any): Promise<TProduct[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM products WHERE id = ' + id
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get product ${error}`)
        }
    } 

    async create(product: TProduct): Promise<TProduct[]> {
        try {
            const connection = await Client.connect()
            const sql = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *'
            const result = await connection.query(sql, [product.name, product.price])
            const createdProduct = result.rows[0]
            connection.release()
            return createdProduct
        } catch (error) {
            throw new Error(`Cannot get products ${error}`)
        }
    } 
}