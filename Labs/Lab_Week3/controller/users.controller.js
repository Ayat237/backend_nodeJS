const  userRouter = express.Router();

export const getUser = app.post('/',(req,res,next)=>{
    res.json("")
})

export const addUser=app.post('/',(req,res,next)=>{
    req.body.id = users.length+1;
    users.push(req.body);
    res.status(201).json(users);
 })
 export const updateUser =app.patch('/:id',(req,res,next)=>{
    const {id}=req.params;
    const {name}=req.body;
    const index =users.findIndex(Element=>Element.id == id);
    users[index].name =name;
   res.json(users);
 })

 export const deleteUser = app.delete('/:id',(req,res,next)=>{
    const {id}=req.params;
    const index =users.findIndex(Element=>Element.id == id);
    users.splice(index,1);
    res.json(users);
 })

 export default userRouter