//    {importing express.js }
const express = require("express");

//{import express from 'express';}
// {creating instance(object) (jaise ek class hai usme ek object ban sakte hain ) of express to create express app}
const app = express();

// {create router instance for routing from express}
const router = express.Router();
// enabling json data read 
app.use(express.json())
// {the first parameter of get is path and second parameter is callbackfunction (it takes two parameter request and response )}
// get api creation syntax : router.get(path,callback)
// router.get('/hello', function (req,res){ // GET API bana li
// router.get("/hello", function (req, res) {
router.post("/:country/user/:state", function (req, res) {
  // GET API bana li
  // getting valus from query params
  // const name = req.query.product;
  // const brand = req.query.brand;
  // getting query object
  // console.log(name,brand)
  // console.log(req.query)
  // const data =req.query;

// destructuring the query param 
  const { product, brand } = req.query;
  // accessing path param 
  const countryName = req.params;
  //acessign body request 
  const user = req.body;
  console.log(countryName,user)
  // res.send({status: 'ok' , message:{name:name,brand:brand}});
  console.log(user);
  res.send({ status: "ok", message: { name: product, brand: brand },user });
});

// global middleware for all  api calling defined with router
// jo server aur client ki saari comuunication ka kaam kare unke beech mein wo middle are hai
// use middleware to use the api
app.use("/", router);

// code to start server app.listen(port,)
app.listen(8000, function () {
  console.log("server started at port ", 8000);
});

// code to run javascript file : node javascript file name
