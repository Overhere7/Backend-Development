import studentModel from "../models/studentModel.mjs";
const findStudent = async (req,res)=>{
    const students = await studentModel.find({name : "hh"});
    return res.send({status:'ok',message:students})
}
const createdStudent =async (req,res)=>{
const data=req.body;
const createdStudent=await studentModel.create(data);
return res.send({status:'ok',message:createdStudent})
}
export {findStudent,createdStudent};