import express, { Request, Response } from 'express'
import { Order, TOrder } from '../models/order'
import authorization from '../middlewares/authorization'

const orders = new Order()

const index = async (_req: Request, res: Response) => {
    const ordersList = await orders.index()
    res.json(ordersList)
} 


const show = async (req: Request, res: Response) => {
    const order = await orders.show(req.params.id)
    res.json(order)
}

const create = async (req: Request, res: Response) => {
    try {
        const order: TOrder = {
            user_id: req.body.user_id,
            status: req.body.status,
        }

        const newOrder = await orders.create(order)
        res.status(201)
        res.json(newOrder)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const ordersRoute = (app: express.Application) => {
    app.get('/orders', authorization, index)
    app.get('/orders/:id', authorization, show)
    app.post('/orders', authorization, create)
}

export default ordersRoute