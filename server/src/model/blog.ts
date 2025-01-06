
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

// blogRouter.post('/blog/:id/comment', (req, res) => {
//     res.json("blog comment");
// })  

// blogRouter.get('/blog/:id/comment', (req, res) => {
//     res.json("blog comment list");
// })  

// blogRouter.get('/blog/:id/comment/:commentId', (req, res) => {
//     res.json("blog comment detail");
// })  

// blogRouter.put('/blog/:id/comment/:commentId', (req, res) => {
//     res.json("blog comment update");
// })  

// blogRouter.delete('/blog/:id/comment/:commentId', (req, res) => {
//     res.json("blog comment delete");
// })

// blogRouter.post('/blog/:id/like', (req, res) => {
//     res.json("blog like");
// })

// blogRouter.get('/blog/:id/like', (req, res) => {
//     res.json("blog like list");
// })

// blogRouter.get('/blog/:id/like/:likeId', (req, res) => {
//     res.json("blog like detail");
// })

// blogRouter.put('/blog/:id/like/:likeId', (req, res) => {
//     res.json("blog like update");
// })

// blogRouter.delete('/blog/:id/like/:likeId', (req, res) => {
//     res.json("blog like delete");
// })

// blogRouter.post('/blog/:id/dislike', (req, res) => {
//     res.json("blog dislike");
// })

// blogRouter.get('/blog/:id/dislike', (req, res) => {
//     res.json("blog dislike list");
// })

// blogRouter.get('/blog/:id/dislike/:dislikeId', (req, res) => {
//     res.json("blog dislike detail");
// })

// blogRouter.put('/blog/:id/dislike/:dislikeId', (req, res) => {
//     res.json("blog dislike update");
// })

// blogRouter.delete('/blog/:id/dislike/:dislikeId', (req, res) => {
//     res.json("blog dislike delete");
// })  



