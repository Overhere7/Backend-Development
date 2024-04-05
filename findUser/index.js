const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
let users =[{
    name:"Rishav",
    password:"Rishav123"
},
{
    name:"Piyush",
    password:"Piyush123"
},
{
    name:"Ankit",
    password:"Ankit123"
}]
router.get('/user',function(req,res){
    const {user} = req.body;
    for(let i =0;i<user.length ;i++){
        if(users[i].name==user){
          return   res.send(users[i])
        }
    }
     return    res.send('user not  found')
        // res.send('test')
    })
app.use('/',router);
app.listen(8000,function(){
    console.log('server started on 8000:',8000)
})