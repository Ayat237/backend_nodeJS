import mysql from "mysql2"

// connect to db
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "node" 
})

connection.connect((err)=>{
    if(err){
        console.log("DB Connection Error!!")
    }
    else{
        console.log("DB Connected Successfully:)")
    }
})

export default connection 