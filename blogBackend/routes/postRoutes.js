const router = require("express").Router();
const Post = require("../models/postModels")

router.post("/", async(req,res)=>{

  //retrive data from request
  const {title , createdAt, tags, html} = req.body;

  //construct post model
const newPost = new Post({
  title,
  createdAt,
  tags,
  html
});
  //save post model
  try{
    const savedPost = await newPost.save();
    res.json(savedPost);
  }catch (err){
    console.log(err);
  }

});

//Delete POST

router.delete("/:id",async(req,res)=>{
  Post.findByIdAndRemove({_id: req.params.id},(err,post)=>{
    if (err) return next(err);
    res.json(post);
  })
})

router.get("/", async(req,res)=>{
  const posts = await Post.find();
  res.json(posts);
})

router.get("/:id",async (req,res)=>{
  const post = await Post.findById(req.params.id);
  res.json(post);
} )

module.exports = router;
