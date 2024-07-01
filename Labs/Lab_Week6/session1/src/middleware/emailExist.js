import connection from "../../DB/connectionDB.js"



export const emailExist = (req,res,next)=>{
    const {email} = req.body 
    connection.execute(`select email from users where email = "${email}"`,(err,result)=>{
        if(err){
            return res.status(404).json({msg :"[ERROR 404!] query error",err})
         }
        if(result.length){
            return res.status(400).json({msg :"[ERROR!] user is already exist"})
        }
        next()
    })
}