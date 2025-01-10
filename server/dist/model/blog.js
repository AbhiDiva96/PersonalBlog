"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.blogRouter = express_1.default.Router();
//endpoint for blog
exports.blogRouter.post('/create', (req, res) => {
    res.json("blog created");
});
exports.blogRouter.get('/blog', (req, res) => {
    res.json("blog list");
});
exports.blogRouter.get('/blog/:id', (req, res) => {
    res.json("blog detail");
});
exports.blogRouter.put('/blog/:id', (req, res) => {
    res.json("blog update");
});
exports.blogRouter.delete('/blog/:id', (req, res) => {
    res.json("blog delete");
});
