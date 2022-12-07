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
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorization_1 = __importDefault(require("../middlewares/authorization"));
const users = new user_1.User();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usersList = yield users.index();
    res.json(usersList);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users.show(req.params.id);
    res.json(user);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        };
        const newUser = yield users.create(user);
        const token = jsonwebtoken_1.default.sign(newUser, process.env.JWT_KEY);
        res.json({ newUser, token });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, } = req.body;
        const auth = yield users.login(email, password);
        if (auth) {
            const token = jsonwebtoken_1.default.sign(auth, process.env.JWT_KEY);
            const message = `Welcome ${auth.firstname} ${auth.lastname}`;
            res.json({ message, token });
        }
        else {
            res.send('Invalid Credentials!');
        }
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const usersRoute = (app) => {
    app.get('/users', authorization_1.default, index);
    app.get('/users/:id', authorization_1.default, show);
    app.post('/users', create);
    app.post('/login', login);
};
exports.default = usersRoute;
