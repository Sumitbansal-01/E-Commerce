const mongoose = require("mongoose")


const uri=process.env.uri;
mongoose.set('strictQuery', true)

mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`connection is successful`);
}).catch((err)=>console.log(err));


