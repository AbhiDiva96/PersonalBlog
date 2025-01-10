"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//lets build robust backend system
const express_1 = __importDefault(require("express"));
const user_1 = require("./model/user");
const blog_1 = require("./model/blog");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use('/api/v1/user', user_1.userRouter);
app.use('/api/v1/blog', blog_1.blogRouter);
app.get('/', (req, res) => {
    res.json("hii there");
});
app.listen(PORT, () => {
    console.log(`server is listing on PORT ${PORT}`);
});
