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
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.blogRouter = express_1.default.Router();
//endpoint for blog
exports.blogRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, content } = req.body;
    if (!title || !description || !content) {
        res.status(400).json({ message: "title, description and content are required" });
    }
    try {
        const blog = yield prisma.post.create({
            data: {
                title: title,
                description: description,
                content: content,
                author: {
                    connect: {
                        //connect to user table and get user id
                        id: 1
                    }
                }
            }
        });
        res.status(200).json({
            message: "blog creted successfully",
            blog: blog
        });
    }
    catch (error) {
        res.status(500).json({ message: "error creating blog" });
    }
}));
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
