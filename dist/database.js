"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { POSTGRESS_HOST, POSTGRESS_DB, POSTGRESS_TEST_DB, POSTGRESS_USER, POSTGRESS_PASSWORD, ENV, } = process.env;
let client;
if (ENV === 'dev') {
    client = new pg_1.Pool({
        host: POSTGRESS_HOST,
        database: POSTGRESS_DB,
        user: POSTGRESS_USER,
        password: POSTGRESS_PASSWORD,
    });
}
if (ENV === 'test') {
    client = new pg_1.Pool({
        host: POSTGRESS_HOST,
        database: POSTGRESS_TEST_DB,
        user: POSTGRESS_USER,
        password: POSTGRESS_PASSWORD,
    });
}
exports.default = client;
