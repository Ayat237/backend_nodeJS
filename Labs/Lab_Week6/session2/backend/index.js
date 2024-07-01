import  express from 'express'
import postRouter from "./src/modules/posts/posts.routes.js"
import connection from './DB/connectionDB.js'
import cors from "cors"
const app = express()
const port = process.env.port || 5000


app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).json(
        {msg : "project is starting"}
    )
})
app.use(express.json())
app.use("/posts",postRouter)


app.use("*",(req,res)=>{
    res.status(404).json({
        msg : "[Error 404!] Page Not Found"
    })
})
app.listen(port, () => console.log(`listening on port ${port}!`))