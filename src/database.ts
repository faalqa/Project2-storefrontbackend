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

const variables = {
    host: POSTGRESS_HOST,
    database: POSTGRESS_DB,
    user: POSTGRESS_USER,
    password: POSTGRESS_PASSWORD,
}
console.log(ENV)

if (ENV === 'test') {
    variables.database = POSTGRESS_TEST_DB
}

const client = new Pool ({
    host: variables.host,
    database: variables.database,
    user: variables.user,
    password: variables.password,
})

// if (ENV === 'test') {
//     client = new Pool ({
//         host: POSTGRESS_HOST,
//         database: POSTGRESS_TEST_DB,
//         user: POSTGRESS_USER,
//         password: POSTGRESS_PASSWORD,
//     })
// }


export default client


