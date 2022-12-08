import express, { Request, Response } from 'express'
import { Product, TProduct } from '../models/product'
import authorization from '../middlewares/authorization'

const products = new Product()

const index = async (_req: Request, res: Response) => {
    const productsList = await products.index()
    res.json(productsList)
} 


const show = async (req: Request, res: Response) => {
    const product = await products.show(req.params.id)
    res.json(product)
}

const create = async (req: Request, res: Response) => {
    try {
        const product: TProduct = {
            name: req.body.name,
            price: req.body.price,
        }

        const newProduct = await products.create(product)
        res.status(201)
        res.json(newProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const productsRoute = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', authorization, create)
}

export default productsRoute