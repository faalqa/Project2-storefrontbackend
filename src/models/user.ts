import Client from '../database'
import bcrypt from 'bcrypt'
// import dotenv from 'dotenv'

// dotenv.config()

const {
    BCRYPT_PASSWORD,
    SALT_ROUNDS,
} = process.env

export type TUser = {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    ceated_at?: string;
}
export class User {
    async index(): Promise<TUser[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM users'
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get users ${error}`)
        }
    }

    async show(id: any): Promise<TUser[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM users WHERE id = ' + id
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (error) {
            throw new Error(`Cannot get user ${error}`)
        }
    } 

    async create(user: TUser): Promise<TUser[]> {
        try {
            const connection = await Client.connect()
            const sql = 'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *'
            const hash = bcrypt.hashSync(user.password + BCRYPT_PASSWORD, parseInt(SALT_ROUNDS as string));
            const result = await connection.query(sql, [user.firstname, user.lastname, user.email, hash])
            const createdUser = result.rows[0]
            connection.release()
            return createdUser
        } catch (error) {
            throw new Error(`Cannot create user ${error}`)
        }
    } 

    async login(email: string, password: string): Promise<TUser | null> {
        const conn = await Client.connect()
        const sql = 'SELECT * FROM users WHERE email = ($1)'
    
        const result = await conn.query(sql, [email])
    
        if(result.rows.length) {
          const user = result.rows[0]
    
          if (bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password)) {
            return user
          }
        }
    
        return null
    }
}