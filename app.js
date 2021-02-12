<<<<<<< HEAD
let express = require("express");
let app = express();
// const sequelize = require("./db");
let product = require("./controllers/productController");
=======
require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let user = require('./controllers/userController');

sequelize.sync();
// sequelize.sync({force:true}) //to delete rows in pgAdmin

app.use(require('./middleware/headers'));
app.use(express.json());

/****
 *  EXPOSED route *
 ****/
app.use('/user', user);

>>>>>>> 72668eb4489dd94c4773204ede3abc23913d0d66

// sequelize.sync();

app.use("/product", product);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
