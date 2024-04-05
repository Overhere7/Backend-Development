import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes.mjs';
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://rishavtarway:BRExTsIbpVW45Y9O@cluster0.in2pgvk.mongodb.net/FSTData").then(()=> console.log('DATABASE CONECTED')).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000,()=>{
    console.log('server started on port:',8000)
});
