const express=require('express');
const app=express();
app.use(express.json());

require("./db/conn");
const MensRanking=require("./model/mens");
const port=process.env.PORT ||3000;


//Post Method
app.post("/mens",async(req,res)=>{
    try{
        
        const MensObj=await new MensRanking(req.body);
        console.log(req.body);

        
        
        
        const insertmens= await MensObj.save();
        res.status(201).send(insertmens);

    }catch(e){

        res.status(400).send(e);


    }
})

//get method
app.get("/mens", async (req,res)=>{
    try{
        const getMens=await MensRanking.find({}).sort({"ranking":1});
        res.send(getMens);
    }
    catch(e){
        res.status(400).send(e);

    }
})

//handling the individual request

app.get("/mens/:id", async (req,res)=>{
    try{
        const _id=req.params.id;
        const getMens=await MensRanking.find({_id});
        res.send(getMens);
    }
    catch(e){
        res.status(400).send(e);

    }
})

//handling the patch request
app.patch("/mens/:id", async (req,res)=>{
    try{
        const _id=req.params.id;

        const getMens=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true,
        });
        res.send(getMens);
    }
    catch(e){
        res.status(500).send(e);

    }
})
app.patch("/mens/:id", async (req,res)=>{
    try{
        const _id=req.params.id;

        const getMens=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true,
        });
        res.send(getMens);
    }
    catch(e){
        res.status(500).send(e);

    }
})

//handle the delete request

app.delete("/mens/:id", async (req,res)=>{
    try{
        const _id=req.params.id;

        const getMens=await MensRanking.findByIdAndDelete(_id);
      
        res.send(getMens);
    }
    catch(e){
        res.status(500).send(e);

    }
})



app.listen(port,()=>{
    console.log(`We are listening to the port no ${port} `);
})