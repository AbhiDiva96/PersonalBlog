import express from 'express';

export const userRouter = express.Router();


userRouter.post('/register', (req, res) => {
    const {email, password} = req.body();

    //add user to db
    if(!email || !password){    
        res.status(400).json({error: "email or password is missing"})
        return;
    }
  
    try{
        //add user to db
        res.json("user signed up")
    }
    catch(err){
        res.status(500).json("error registering user")
    }

})

userRouter.post('login', (req, res) => {
    const {email, password} = req.body();

    //add user to db
    if(!email || !password){    
        res.status(400).json({error: "email or password is missing"})
        return;
    }

    try{
        //add user to db
        res.json("user logged in")
    }
    catch(err){
        res.status(500).json("error logging in user")
    }
})