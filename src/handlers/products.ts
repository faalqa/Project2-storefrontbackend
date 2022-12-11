import express, { Request, Response } from 'express'
import { Product, TProduct } from '../models/product'
import authorization from '../middlewares/authorization'

const products = new Product()

const index = async (_req: Request, res: Response) => {
    try {
        const productsList = await products.index()
        res.json(productsList)
    } catch (error) {
        res.status(400)
        res.json(error)
    }  
} 


const show = async (req: Request, res: Response) => {
    try {
        const product = await products.show(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400)
        res.json(error)        
    } 
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
    } catch(error) {
        res.status(400)
        res.json(error)
    }
}

const productsRoute = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', authorization, create)
}

export default productsRoute