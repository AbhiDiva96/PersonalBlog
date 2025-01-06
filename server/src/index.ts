//lets build robust backend system
import express from 'express';
import { userRouter } from './model/user';
import { blogRouter } from './model/blog';

const app = express();
app.use(express.json())

const PORT = 3000;

app.use('/api/v1/users', userRouter);
app.use('/api/v1/blogs', blogRouter);

app.get( '/' , (req, res) => {
     res.json("hii there")
})

app.listen(PORT , () => {
     console.log(`server is listing on PORT ${PORT}`)
})