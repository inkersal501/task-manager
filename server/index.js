const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8082;
const DB_URI = 'mongodb://localhost:27017/task-manager';

mongoose.connect(DB_URI, {
    "useNewUrlParser" :true,
    "useUnifiedTopology": true
}).then(()=> console.log("DB Connected"))
.catch((error)=> console.log("Error Connection Database: ", error));

app.use(cors);
app.use(express.json());

app.listen(PORT, ()=> {
 console.log(`Server is listening on PORT ${PORT}`);
})