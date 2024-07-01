import express from 'express'
import userRouter from './src/modules/users/user.routes.js'
import postRouter from './src/modules/posts/post.routes.js'
import connection from './DB/connectionDB.js'
const app = express()
const port = 3000


app.use(express.json());
app.use("/users",userRouter);
app.use("/posts",postRouter);

app.use("/*",(req,res,next)=>{
    res.status(404).json({msg:"[ERROR!]Not Found"});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))