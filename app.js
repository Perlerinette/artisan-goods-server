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


app.listen(3000, function(){
    console.log('App is listening on port 3000');
})