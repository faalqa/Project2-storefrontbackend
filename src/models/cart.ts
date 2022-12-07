import Client from '../database'

export type TCart = {
    id?: number;
    order_id: number;
    product_id: number;
    quantity: number;
    ceated_at?: string;
}
export class Cart {
    async index(): Promise<TCart[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM carts'
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get carts ${error}`)
        }
    }

    async show(id: any): Promise<TCart[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM carts WHERE id = ' + id
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get cart ${error}`)
        }
    } 

    async addToCart(cart: TCart): Promise<TCart[]> {
        try {
            const connection = await Client.connect()
            const sql = 'INSERT INTO carts (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *'
            const result = await connection.query(sql, [cart.order_id, cart.product_id, cart.quantity])
            const createdCart = result.rows[0]
            connection.release()
            return createdCart
        } catch (error) {
            throw new Error(`Cannot get carts ${error}`)
        }
    } 
}