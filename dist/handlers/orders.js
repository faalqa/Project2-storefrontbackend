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
const order_1 = require("../models/order");
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const orders = new order_1.Order();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ordersList = yield orders.index();
    res.json(ordersList);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield orders.show(req.params.id);
    res.json(order);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = {
            user_id: req.body.user_id,
            status: req.body.status,
        };
        const newOrder = yield orders.create(order);
        res.json(newOrder);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const ordersRoute = (app) => {
    app.get('/orders', authorization_1.default, index);
    app.get('/orders/:id', authorization_1.default, show);
    app.post('/orders', authorization_1.default, create);
};
exports.default = ordersRoute;
