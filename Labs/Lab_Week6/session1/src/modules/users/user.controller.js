import connection from "../../../DB/connectionDB.js"



//**********************************getUser**************************************
export const getUser = (req, res,next) =>
    {
        connection.execute(`select * from users`,(err,result)=>
        {
            if(err){
               return res.status(404).json({msg :"[ERROR 404!] query error",err})
            }
            console.log(result);
            if(!result.length){
               return  res.status(404).json({msg :"[ERROR 404!] users not found"})
            }
            return  res.status(200).json(result)
        })
    }

    //**********************************getOneUserWithPosts**************************************
export const getOneUserWithPosts = (req, res,next) =>
    {
        const {id} = req.params
        connection.execute(`select users.id as userId ,name ,posts.title ,posts.description from users left join posts on users.id = posts.userId where users.id = "${id}"`,(err,result)=>
        {
            if(err){
               return res.status(404).json({msg :"[ERROR 404!] query error",err})
            }
            console.log(result);
            if(!result.length){
               return  res.status(404).json({msg :"[ERROR 404!] users not found"})
            }
            return  res.status(200).json(result)
        })
    }

//**********************************addUser********************************
export const addUser = (req,res,next)=>{
    //Add user
    const {name, password, age,email} = req.body;
    const query =`insert into users (name,password,age,email) values ("${name}" ,"${password}","${age}","${email}")`;
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

//**********************************updateUser********************************
export const updateUser = (req,res,next)=>{
    const {age} = req.body
    const {id} = req.params 
    //update user
    const query =`update users set age="${age}" where id = "${id}"`;
    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(404).json({msg :"[ERROR 404!] query error",err})
         }
         console.log(result);
        if(!result.affectedRows){
            return res.status(400).json({msg :"[ERROR!] updated Faild"})
        }
        return  res.status(201).json({msg:"updated done" ,result})
    })  
}

//**********************************deleteUser********************************
export const deleteUser = (req,res,next)=>{
    const {id} = req.params 
    //update user
    const query =`delete from users where id = "${id}"`;
    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(404).json({msg :"[ERROR 404!] query error",err})
         }
         console.log(result);
        if(!result.affectedRows){
            return res.status(400).json({msg :"[ERROR!] Deleted Faild"})
        }
        return  res.status(201).json({msg:"Deleted done"})
    })  
}
