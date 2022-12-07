import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const {
    POSTGRESS_HOST,
    POSTGRESS_DB,
    POSTGRESS_TEST_DB,
    POSTGRESS_USER,
    POSTGRESS_PASSWORD,
    ENV,
} = process.env

let client

if (ENV === 'dev') {
    client = new Pool ({
        host: POSTGRESS_HOST,
        database: POSTGRESS_DB,
        user: POSTGRESS_USER,
        password: POSTGRESS_PASSWORD,
    })
}

if (ENV === 'test') {
    client = new Pool ({
        host: POSTGRESS_HOST,
        database: POSTGRESS_TEST_DB,
        user: POSTGRESS_USER,
        password: POSTGRESS_PASSWORD,
    })
}


export default client


