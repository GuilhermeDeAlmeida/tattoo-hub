var express = require("express");
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Toda vez que for usado vai chamar isso");
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/", function (req, res) {
  res.json({aquiVaiTer: "Um manudal do que fazer com essa rota"});
});

router.get("/cores", function (req, res) {
  res.json({
    plantacao : "#ff6347",
    estufa : "#c0c0c0"
  });
});

module.exports = router;
