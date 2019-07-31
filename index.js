const express = require("express");

const serverMiddleware = require("./config/serverMiddleware");

const authController = require("./controller/auth");

const app = express();

serverMiddleware(app);

app.use("/api/auth", authController);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Droom" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
