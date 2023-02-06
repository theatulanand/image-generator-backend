
const generateImage = require("./Controllers/generateImage.contraoller");

const { validationMiddleware } = require('./Middlewares/validation.middleware');

//dotenv
require('dotenv').config();

const cors = require('cors');
app.use(cors());

//importing express
const express = require("express");
const app = express();

app.use(express.json())

const PORT = process.env.PORT || 8080;

//homePage
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My App</h1>")
})


app.use(validationMiddleware);
app.post("/generateImage", generateImage.generateImg)

//creating server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})



