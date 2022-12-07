import Client from '../database'

export type TOrder = {
    id?: number;
    user_id: number;
    status: string;
    ceated_at?: string;
}
export class Order {
    async index(): Promise<TOrder[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM orders'
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get orders ${error}`)
        }
    }

    async show(id: any): Promise<TOrder[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM orders WHERE id = ' + id
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get order ${error}`)
        }
    } 

    async create(order: TOrder): Promise<TOrder[]> {
        try {
            const connection = await Client.connect()
            const sql = 'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *'
            const result = await connection.query(sql, [order.user_id, order.status])
            const createdOrder = result.rows[0]
            connection.release()
            return createdOrder
        } catch (error) {
            throw new Error(`Cannot get orders ${error}`)
        }
    } 
}