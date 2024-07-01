import connection from "../../../DB/connectionDB.js";

//**********************************getPost**************************************
export const getPost = (req, res,next) =>
    {
        connection.execute(`select * from posts`,(err,result)=>
        {
            if(err){
               return res.status(404).json({msg :"[ERROR 404!] query error",err})
            }
            console.log(result);
            if(!result.length){
               return  res.status(404).json({msg :"[ERROR 404!] posts not found"})
            }
            return  res.status(200).json(result)
        })
    }
//**********************************getPostWithUsers**************************************
export const getPostWithUsers = (req, res,next) => 
    {
        connection.execute(`select * from posts left join users on users.id = posts.userId `,(err,result)=>
        {
            if(err){
               return res.status(404).json({msg :"[ERROR 404!] query error",err})
            }
            console.log(result);
            if(!result.length){
               return  res.status(404).json({msg :"[ERROR 404!] posts not found"})
            }
            return  res.status(200).json({msg:"done",result})
        })
    }


//**********************************addPost********************************
export const addPost = (req,res,next)=>{
    //Add post
    const {title,description,userId} = req.body;
    const query =`insert into posts (title,description,userId) values ("${title}" ,"${description}","${userId}")`;
    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(404).json({msg :"[ERROR 404!] query error",err})
        }
        console.log(result);
        if(!result.affectedRows){
            return res.status(400).json({msg :"[ERROR!] Added Faild",err})
        }
        return  res.status(201).json(result)
    })
    
}