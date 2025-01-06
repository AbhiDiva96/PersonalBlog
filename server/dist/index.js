"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//lets build robust backend system
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/', (req, res) => {
    res.json("hii there");
});
app.listen(PORT, () => {
    console.log(`server is listing on PORT ${PORT}`);
});
