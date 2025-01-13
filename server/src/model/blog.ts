
import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const blogRouter = express.Router();

//endpoint for blog
blogRouter.post('/create', async(req, res) => {


      const token = req.headers.authorization?.split(' ')[1];
      if(!token){
          res.status(401).json({message: "token is missing"})
      }

      const decoded = jwt.verify(token as string, process.env.JWT_SECRET!);
      const userId = (decoded as any).id;
   
      if(!userId){
          res.status(401).json({
            message: "token is invalid"
          })
      }
    

     try{
        const {title, description, content} = req.body;
        if(!title || !description || !content){
            res.status(400).json({message: "title, description and content are required"});
        }

         const blog = await prisma.post.create({
             data: {
                title: title,
                description: description,
                content: content,
                author:{
                    connect: {
                     //connect to user table and get user id
                        id : userId
                    }   
                }
             }
         })

         res.status(200).json({
            message: "blog creted successfully",
            blog: blog
         })

     }catch(error){
         res.status(500).json({message: "error creating blog"})
     }
})

blogRouter.get('/bulk', async(req, res) => {
      
       try{
            const blogs = await prisma.post.findMany();
            
            res.status(200).json({
                message: "bulk blog fetched successfully",
                blogs: blogs
            })
       }catch(error){
           res.status(500).json({message: "error getting blogs"})
       }
})

blogRouter.get('/blog/:id', async(req, res) => {

     const {id} = req.params;

     try{
          const blog = await prisma.post.findUnique({
             where: {
                 id: parseInt(id)
             }
          })

          res.status(200).json({
              message: "blog fetched successfully",
              blog: blog
          })
     }catch(error){
         res.status(500).json({message: "error getting blog"})
     }
})

blogRouter.put('/blog/:id', async(req, res)=> {
        
      const {id} = req.params;
      const {title, description, content} = req.body;

      if(!title || !description || !content){
          res.status(400).json({message: "title, description and content are required"});
      }

      try{
           const updatedBlog = await prisma.post.update({
               where: {
                  id: parseInt(id)
               }, 
               data:{
                   title : title,
                   description: description,
                   content: content
               }
           })

         res.status(200).json({
              message: "blog updated successfully",
              blog: updatedBlog
           })
      }catch(error){
          res.status(500).json({
            message: "error updating blog"
          })
      }
})

blogRouter.delete('/blog/:id', async(req, res) => {
         const {id} = req.params;
         try{
             const deletedBlog = await prisma.post.delete({
                where: {
                    id : parseInt(id)
                }
             })

               res.status(200).json({
                message: "blog deleted successfully",
                blog: deletedBlog
             })
         }catch(error){
            res.status(500).json({
                message: "error deleting blog"
            })
         }
})
