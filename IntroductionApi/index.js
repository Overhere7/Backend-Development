// {importing express.js}
const express = require("express");

const app = express();

const router = express.Router();

router.get("/", function (request, respond) {
  respond.send({

    // ["Rishav Tarway","Btech CSE","2023-2207","FunctionUp School Of Technology" ]
    Name: "Rishav Tarway",
    Course: "Btech CSE",
    Batch: "2023-2027",
  }
  );
});

app.use("/", router);

app.listen(200, function () {
  console.log("server started at post", 200);
});
