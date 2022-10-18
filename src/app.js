const express = require("express");
const app = express();
const port = process.env.port || 8080
const studentRouters = require("./routers/routeStudent");




// <=============DATABASE==================>
require("./db/conn")
//<==============model & Schema=============>
const Student = require("./model/students")

//  use to request body by the postman\
app.use(express.json())
app.use(studentRouters);




app.listen(port, () => {
    console.log(`listening to the ${port}`);
})