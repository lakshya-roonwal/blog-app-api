const express = require("express");
const Blog = require("../modals/Blog");
const router = express.Router();

// Define routes

// Getting All the Blogs       ||No Login Required
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.send(error);
  }
});

// Getting Single Blog by id
router.post('/getsingleblog',async(req,res)=>{
  try
  {
    const blog=await Blog.findById(req.body.id);
    res.send(blog)
  }catch(error)
  {
    res.send(error)
  }

})


// Creating Blogs           || Login Required
router.post("/createblog", (req, res) => {
  try {
    const blog = Blog(req.body);
    blog.save();
    res.json({msg:'created succesfully'})
  } catch (error) {
    res.send(error);
    res.json({msg:'creation Error'})
  }
});

// Deleting Blog            || Login Required
router.delete("/deleteblog", async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.body.id);
      res.json({msg:'deleted succesfully'})
  } catch (error) {
    res.send(error);
    res.json({msg:'creation Error'})
  }
});

// Updating Blog            || Login Required 
router.put('/updateblog',async(req,res)=>{
      try{
        await Blog.findByIdAndUpdate(req.body.id,{content:req.body.content})
        res.json({msg:'updated succesfully'})
      }catch(error)
      {
        console.log(error)
        res.json({msg:'Updation Error'})
      }
})

// Updating Blog Details  ||login required
router.put('/updateblogdetails',async(req,res)=>{
  try{
    await Blog.findByIdAndUpdate(req.body.id,{
      title:req.body.title,
      description:req.body.description,
      blogType:req.body.blogType,
      tag:req.body.tag,
    })
    console.log(req.body)
    res.json({msg:'updated succesfully'})
  }catch(error)
  {
    console.log(error)
    res.json({msg:'Updation Error'})
  }
})

// Export the router
module.exports = router;
