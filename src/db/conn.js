const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/100M",{useNewUrlParser:true,


useUnifiedTopology:true}).then(()=>console.log("Collection is successful for database")).
catch((err)=>console.log("No connections"));

