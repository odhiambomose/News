const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
heading:{type:String,unique:true,required:true},
image:{type:String,required:true,required:true},
category:{type:String, required:true}

},
{timestamps:true}
)
module.exports=mongoose.model("Post",postSchema)