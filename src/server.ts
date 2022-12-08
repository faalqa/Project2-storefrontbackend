import express, { Request, Response } from 'express'
import bodyParser, { json } from 'body-parser'
import userRoute from './handlers/users'
import productRoute from './handlers/products'
import orderRoute from './handlers/orders'
import cartRoute from './handlers/carts'

const app = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

userRoute(app)
productRoute(app)
orderRoute(app)
cartRoute(app)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app