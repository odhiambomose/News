const Post=require("../models/post")
const router=require("express").Router();
const {verifyTokenAndAdmin}=require("./verifyToken")
const {verifyTokenAndAuthorization}=require("./verifyToken")


router.post("/new",async (req,res)=>{
const newPost= await new Post({
heading:req.body.heading,
image:req.body.image,
category:req.body.category




})

try{
    const savedPost=await newPost.save()
    res.status(201).json(savedPost)
}catch(err){
res.status(404).json(err)
}

})


//update
router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
    try{
    const id=req.params.id
    const updates=req.body
    const options={new:true}
    const updatedPost= await Post.findByIdAndUpdate(id,updates,options)
    res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    
    }
    
    })


    //delete user

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        res.status(200).json("post succesfully deleted")
return await Post.findByIdAndDelete(req.params.id)


    }
    catch(err){
        res.status(404).json("record not found")

    }

    
})

//find by id
    
router.get("/find/:id",verifyTokenAndAuthorization, async (req,res)=>{
    try{
const post = await Post.findById(req.params.id)
res.status(200).json(post)
    }
    catch(err){
res.json(err)
    }
})

//find all
router.get("/",verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const post=await Post.find()
        res.status(200).json(post)
    }
    catch(err){
        res.status(404).json(err)
    }
})





module.exports=router