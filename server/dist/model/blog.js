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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.blogRouter = express_1.default.Router();
//endpoint for blog
exports.blogRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: "token is missing" });
    }
    const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    if (!userId) {
        res.status(401).json({
            message: "token is invalid"
        });
    }
    try {
        const { title, description, content } = req.body;
        if (!title || !description || !content) {
            res.status(400).json({ message: "title, description and content are required" });
        }
        const blog = yield prisma.post.create({
            data: {
                title: title,
                description: description,
                content: content,
                author: {
                    connect: {
                        //connect to user table and get user id
                        id: userId
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
exports.blogRouter.get('/bulk', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield prisma.post.findMany();
        res.status(200).json({
            message: "bulk blog fetched successfully",
            blogs: blogs
        });
    }
    catch (error) {
        res.status(500).json({ message: "error getting blogs" });
    }
}));
exports.blogRouter.get('/article/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const blog = yield prisma.post.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({
            message: "blog fetched successfully",
            blog: blog
        });
    }
    catch (error) {
        res.status(500).json({ message: "error getting blog" });
    }
}));
exports.blogRouter.put('/blog/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, content } = req.body;
    if (!title || !description || !content) {
        res.status(400).json({ message: "title, description and content are required" });
    }
    try {
        const updatedBlog = yield prisma.post.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title: title,
                description: description,
                content: content
            }
        });
        res.status(200).json({
            message: "blog updated successfully",
            blog: updatedBlog
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error updating blog"
        });
    }
}));
exports.blogRouter.delete('/blog/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedBlog = yield prisma.post.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({
            message: "blog deleted successfully",
            blog: deletedBlog
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error deleting blog"
        });
    }
}));
