import mysql from "mysql2"

const connection  = mysql.createConnection("mysql://uit1ytpvq1mzy9ba:38vS2pQH0iZzCcGxj00t@b3l8aff6xlzsxb6aeum2-mysql.services.clever-cloud.com:3306/b3l8aff6xlzsxb6aeum2")

connection.connect((err)=>
{
    if(err){
        console.log({msg: "failed connection to DB"});
    }
    console.log({msg: "DB connected successfully"});
})

export default connection