const express = require('express');

// importing mongoose instaled library to make connection with mongodb databae 
const mongoose = require('mongoose');


// with whatever ane we have imported the file we can use it in the app.use the same name we have imported with here we have imported it with router name

// import route file
const router = require('./routes/route');


// moved to route.js
// const router = express.Router();
// router.get("/", function (req, res) {
//     return res.send("testing");
//   });


const app = express();

mongoose.connect('mongodb+srv://rishavtarway:BRExTsIbpVW45Y9O@cluster0.in2pgvk.mongodb.net/').then(()=>console.log('Databse Connected Succesfully ')).catch((err)=>console.log(err));
app.use(express.json());
app.use("/", router);
app.listen(8000, function () {
  console.log("server started on port ", 8000);
});
