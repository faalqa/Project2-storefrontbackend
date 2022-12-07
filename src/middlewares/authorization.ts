import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const verifyAuthToken = (req: Request, res: Response, next: Function) => {
    try {
        let token = ''
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
            token = req.headers.authorization.split(' ')[1]
        }
        jwt.verify(token, process.env.JWT_KEY as string)
        next()
    } catch (error) {
        res.status(401)
        res.json('You have to login first')
        return
    }
}

export default verifyAuthToken