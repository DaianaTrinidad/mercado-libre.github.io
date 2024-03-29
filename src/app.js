const express = require("express");
const path = require("path");

const mainRouter = require("./routes/main-router");

const app = express();

app.listen(3000, () => {
  console.log("Se prendió");
});
//un middleware q le diga a express q queremos setear ejs como nuestro temple engine
app.set("view engine", "ejs" );
//como no esta en la raíz views hay que setearlo (al igual que public)
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRouter);
