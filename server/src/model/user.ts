import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userRouter = express.Router();


userRouter.post('/register', async (req, res) => {

    const {email, password} = req.body;

    //add user to db
    if(!email || !password){    
        res.status(400).json({error: "email or password is missing"})
        return;
    }
  
    try{
        //add user to db

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
            }
        })
        
        res.status(201).json(user);

    }
    catch(err){
        res.status(500).json("error registering user")
    }

})

userRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;

    //add user to db
    if(!email || !password){    
        res.status(400).json({error: "email or password is missing"})
        return;
    }

    try{
        //add user to db
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if(!user){
            res.status(404).json({error: "user not found"})
            return;
        }
         const isPasswordCorrect = await bcrypt.compare(password, user.password!);
         if(!isPasswordCorrect){
            res.status(401).json({message: "password is incorrect"});
            return;
         }
        //jwt token
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET!);
        res.status(200).json({
            token: token,
        })
    }
    catch(err){
        res.status(500).json("error logging in user")
    }
})