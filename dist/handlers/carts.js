"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("../models/cart");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const carts = new cart_1.Cart();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cartsList = yield carts.index();
    res.json(cartsList);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield carts.show(req.params.id);
    res.json(cart);
});
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = {
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
        };
        const newCart = yield carts.addToCart(cart);
        res.json(newCart);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const cartsRoute = (app) => {
    app.get('/carts', authorization_1.default, index);
    app.get('/carts/:id', authorization_1.default, show);
    app.post('/carts', authorization_1.default, addToCart);
};
exports.default = cartsRoute;
