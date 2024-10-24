const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;
app.use("/api/contacts",require("./routes/contactRoute"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})