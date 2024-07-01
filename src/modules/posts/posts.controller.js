import connection from "../../../DB/connectionDB.js"

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> getPost <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export const getPost = (req,res,next)=>{
  
    const query = `select * from posts`
    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg : "[ERROR] Query Error"})
        }
        if(!result.length){
            return res.status(400).json({msg : "[ERROR] No Posts Found"})
        }
        return res.status(201).json({msg : " Posts Found",result})

    })
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> addPost <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export const addPost = (req,res,next)=>{
    const {title , description , price} = req.body
    const query = `insert into posts (title , description , price) values ("${title}" , "${description}" , "${price}")`
    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg : "[ERROR] Query Error"})
        }
        if(!result.affectedRows){
            return res.status(400).json({msg : "[ERROR] Added Faild"})
        }
        return res.status(201).json({msg : "Added Successfully",result})

    })
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> updatePost <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export const updatePost = (req,res,next)=>{
    const {title , description , price, id} = req.body
    const query = `update posts set title ="${title}" , description = "${description}", price ="${price}" where id = ${id}`
    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg : "[ERROR] Query Error"})
        }
        if(!result.affectedRows){
            return res.status(400).json({msg : "[ERROR] Updated Faild"})
        }
        return res.status(201).json({msg : "Updated Successfully",result})
 
    })
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> deletepost <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export const deletepost = (req,res,next)=>{
    const {id} = req.body
    const query = `delete from posts where id = ${id}`
    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg : "[ERROR] Query Error"})
        }
        if(!result.affectedRows){
            return res.status(400).json({msg : "[ERROR] deleted Faild"})
        }
        return res.status(201).json({msg : "deleted Successfully",result})

    })
}
