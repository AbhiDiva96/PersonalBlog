
import express from 'express';

export const blogRouter = express.Router();

//endpoint for blog
blogRouter.post('/create', (req, res) => {
    res.json("blog created");
})

blogRouter.get('/blog', (req, res) => {
    res.json("blog list");
})

blogRouter.get('/blog/:id', (req, res) => {
    res.json("blog detail");
})

blogRouter.put('/blog/:id', (req, res) => {
    res.json("blog update");
})

blogRouter.delete('/blog/:id', (req, res) => {
    res.json("blog delete");
})
