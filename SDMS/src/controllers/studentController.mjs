import studentModel from "../models/studentModel.mjs";
const findStudent = async (req, res) => {
  // const students = await studentModel.find();
  const students = await studentModel.findOne();

  //find one wo karga jo document sabe pehle creat thaa wo return karega jo sabse bana hoga wo findone leke aayega

  res.send({ status: true, message: students });
  // res.send('testing succesful');
};
const createStudent = async (req, res) => {
  const data = req.body;

  // const createdStudent = await studentModel.create(data);
  //  const createdStudent = await studentModel.insertMany(data);
  const createdStudent = await studentModel.insertMany([data, data, data]);
  // insert many ki hlep se laga alag collection mein bhejnge jab multikle data collection ko eksaath insert karna hai to insertmany karte hain

  //create method is used to create database in collection and create is a mongoDB method
  // await is used to jab tak mongobd server respise nhi de deta tab ye initialize ho jayega created student ke andar we can use await whn the function is of async type

  return res.send({ status: true, message: createdStudent });
};
const deleteStudent = async (req, res) => {
  // const data= await studentModel.deleteMany({name:'Ankit'});
  const data = await studentModel.findByIdAndDelete({
    _id: "660f913173a33bcaff60f135",
  });
  return res.send({ status: true, message: data });
};
// delete many conditojn leta hai jismka jo particular lable hai usko delete kardo

const updateStudent = async (req, res) => {
  const newStudent = await studentModel.updateOne({ name:"Ram" }, {$set:{"name":"shyam"}});
  return res.send({status:true,message:newStudent})
};
// paramter jise match ohni haqi wo first value , jo update krni hai wo value
export { findStudent, createStudent, deleteStudent,updateStudent };
