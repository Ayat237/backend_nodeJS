// serever http

const http = require('http');
const fs = require('fs');
let users = fs.readFileSync('data.json','utf-8');
users = JSON.parse(users);
//Console.log(users);
// create server to listen on it 
// any request must have response 
const server = http.createServer((req,resp) => {
    const {method,url} =req;
    if(method =='GET' && url=='/users')
    {
        resp.end(JSON.stringify(users));
    }
    else if(method =='POST' && url=='/addUsers')
    {
       
        req.on("data",(chunk) =>{
            const data = JSON.parse(chunk);
            data.id = users.length+1;
            users.push(data);
            fs.writeFileSync('data.json',JSON.stringify(users));
            resp.statusCode=201;
            resp.end(JSON.stringify(users));
        });      
    }
    else if(method =='PUT' && url.startsWith('/user'))
    {
        const id = url.split("/")[2];
        const index = users.findIndex((element)=>{
            return element.id = id;
        })
        req.on("data",(chunk) =>{
            const {name,age} = JSON.parse(chunk);
            users[index].name = name;
            users[index].age = age;
            fs.writeFileSync('data.json',JSON.stringify(users));
            resp.end(JSON.stringify(users));
        }); 
    }
    else if(method =='DELETE' && url.startsWith('/user'))
    {
        const id = url.split("/")[2];
        const index = users.findIndex((element)=>{
            return element.id = id;
        });
        users.splice(index,1);
        resp.end(JSON.stringify(users));
    }
    else
    {
        resp.end(JSON.stringify({message:'not found'}));
    }
});
// server.listen(port=>5000,localhost(hostname),arrowFunction);
server.listen(5000,(error) =>{
    if(error)
    {
        console.log("server error");
    }
    else{
        console.log("server running");
    }
});