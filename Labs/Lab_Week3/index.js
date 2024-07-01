import express from "express"
import {productRouter} from "./src/product.route.js"
import {userRouter} from "./src/users.route.js"
const app = express();
app.use(express.json());
app.use(productRouter);

app.use(userRouter);

 app.all('*',(req,res,next)=>{
    res.json({message :"Not Found"});
 })
app.listen(3000,(error)=>{
    if(error){
        console.log("error");
    }
    else{
        console.log("server running 3000");
    }
})