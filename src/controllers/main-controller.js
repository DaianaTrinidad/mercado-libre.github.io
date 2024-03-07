const path = require("path");

const mainController = {
  home: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  },
  register: (req,res)=>{
    res.sendFile(path.join(__dirname), "./views/register.html");
  }
};

module.exports = mainController;