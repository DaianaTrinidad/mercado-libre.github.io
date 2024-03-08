const express = require("express");
const path = require("path");

const mainRouter = require("./routes/main-router");

const app = express();

app.listen(3000, () => {
  console.log("Se prendió");
});

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRouter);
