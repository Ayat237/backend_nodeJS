const  productRouter = express.Router();


export const getProduct = app.post('/',(req,res,next)=>{
    res.json("")
})

export const addProduct=app.post('/',(req,res,next)=>{
    req.body.id = Products.length+1;
    Products.push(req.body);
    res.status(201).json(Products);
 })
 export const updateProduct =app.patch('/:id',(req,res,next)=>{
    const {id}=req.params;
    const {name}=req.body;
    const index =Products.findIndex(Element=>Element.id == id);
    Products[index].name =name;
   res.json(Products);
 })

 export const deleteProduct = app.delete('/:id',(req,res,next)=>{
    const {id}=req.params;
    const index =Products.findIndex(Element=>Element.id == id);
    Products.splice(index,1);
    res.json(Products);
 })


export default productRouter;