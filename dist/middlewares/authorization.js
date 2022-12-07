"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAuthToken = (req, res, next) => {
    try {
        let token = '';
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
            token = req.headers.authorization.split(' ')[1];
        }
        jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
        next();
    }
    catch (error) {
        res.status(401);
        res.json('You have to login first');
        return;
    }
};
exports.default = verifyAuthToken;
