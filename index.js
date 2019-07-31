const express = require("express");

const serverMiddleware = require("./config/serverMiddleware");
const authenticate = require("./middleware/authenticate");

const authController = require("./controller/auth");
const applicantsController = require("./controller/applicants");

const app = express();

serverMiddleware(app);

app.use("/api/auth", authController);
app.use("/api/applicants", authenticate, applicantsController);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Droom" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
