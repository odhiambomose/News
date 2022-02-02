const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const postRoutes=require("./routes/post")
const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user")



const app=express()
const PORT=process.env.PORT || 8000


dotenv.config()
mongoose.connect(process.env.MONGO_URL, )

.then(()=>{
    console.log("dn connected")

})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`server is connected on port ${PORT}`)
})
app.use(express.json())

app.use("/api/post",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)