const express = require("express");
const app = express();
const cors = require('cors');
const port = 8181;
const connectToMongo=require('./db')

connectToMongo();


app.use(express.json())
app.use(cors())
// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
// blog Route
app.use('/api/blog',require('./routes/blog'))


app.listen(port, (req, res) => {
  console.log(`Server successfully started on http://localhost:${port}`);
});
