const User=require("../models/user");
const router = require("express").Router();
const {verifyTokenAndAuthorization,verifyTokenAndAdmin}=require("./verifyToken")





//update

router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
    try{
    const id=req.params.id
    const updates=req.body
    const options={new:true}
    const updatedUser= await User.findByIdAndUpdate(id,updates,options)
    res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json("error")
    
    }
    
    })
    

    //delete

    router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
        try{
            res.status(200).json("user succesfully deleted")
    return await User.findByIdAndDelete(req.params.id)
    
    
        }
        catch(err){
            res.status(404).json("record not found")
    
        }
    
        
    })

    //find y id

    router.get("/find/:id",verifyTokenAndAuthorization, async (req,res)=>{
        try{
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
        }
        catch(err){
    res.json(err)
        }
    })

    //find all
router.get("/",verifyTokenAndAuthorization, async(req,res)=>{
    try{
        const users=await User.find()
        console.log(users)
        res.status(200).json(users)
    }
    catch(err){
        res.status(404).json(err)
    }
})

module.exports=router