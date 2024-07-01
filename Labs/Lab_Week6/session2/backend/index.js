import  express from 'express'
import postRouter from "./src/modules/posts/posts.routes.js"
import connection from './DB/connectionDB.js'
import cors from "cors"
const app = express()
const port = 5000


app.use(cors())
app.use(express.json())
app.use("/posts",postRouter)


app.use("*",(req,res)=>{
    res.status(404).json({
        msg : "[Error 404!] Page Not Found"
    })
})
app.listen(port, () => console.log(`listening on port ${port}!`))