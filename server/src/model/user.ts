import express from 'express';

export const userRouter = express.Router();


userRouter.post('/register', (req, res) => {
    console.log(req.body);
    res.json("user signup");
})

userRouter.post('login', (req, res) => {
    res.json("user login")
})