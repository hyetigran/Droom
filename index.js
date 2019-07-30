const express = require("express");
const bodyParse = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Droom" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});