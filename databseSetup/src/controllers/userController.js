const userModel = require('../models/userModel');

// function user  (req, res) {
//     return res.send("testing");
//   }

// function expression 
const user = async (req, res) => {
    const data = req.body;
    const userCreated = await userModel.create(data);

    return  res.send({status:'ok',message:userCreated});
  }

module.exports=user;