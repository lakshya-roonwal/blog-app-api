const express = require("express");
const app = express();
const cors = require('cors');
const dotenv=require('dotenv')
dotenv.config();
const port = process.env.PORT;
const Blog = require("../modals/Blog");
const connectToMongo=require('./db')

connectToMongo();


app.use(express.json())
app.use(cors())
// Routes
app.get("/", async(req, res) => {
    res.send("Hello World")
});
app.use('/api/blog',require('./routes/blog'))



app.listen(port, (req, res) => {
  console.log(`Server successfully started on ${process.env.BASE_URL}${port}`);
});
