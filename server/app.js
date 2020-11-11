const express = require('express');
const app = express();
require('dotenv').config()

// const PORT = Number(process.env.PORT) || 4000;

const errorHandling = require('./middlewares/errorHandling')
const router = require('./routes')

const cors = require('cors')

//Middlewares
app.set('view engine','pug');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors())
//Routes
app.use(router);
app.use(errorHandling);

//Migrate listen to bin//www
// app.listen(PORT, () => {
//     console.log("App is running at : ", PORT)
// })

module.exports= app;