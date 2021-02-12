let express = require("express");
let app = express();
// const sequelize = require("./db");
let product = require("./controllers/productController");

// sequelize.sync();

app.use("/product", product);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
