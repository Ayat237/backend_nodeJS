import connection from "../../DB/connectionDB.js"



export const userIdExist = (req,res,next)=>{
    const {userId} = req.body
    connection.execute(`select id from users where id = "${userId}"`,(err,result)=>{
        if(err){
            return res.status(404).json({msg :"[ERROR 404!] query error",err})
         }
        if(!result.length){
            return res.status(400).json({msg :"[ERROR!] userId not found"})
        }
        next()
    })
}