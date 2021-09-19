import express from 'express'
// import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/post.js'
import userRoutes from './routes/users.js'
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())
app.use('/posts',postRoutes)
app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.send('Welcome to Full stack mern social media application')
})
// const CONNECTION_URL = "mongodb+srv://memories:786aliali786@cluster0.j43x6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running on the port : ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);