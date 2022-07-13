const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

const productsHandler = require('./routes/products');
const accountRoute = require('./routes/accounts');
const comprasRoute = require('./routes/compras');
const idRoute = require('./routes/nextid');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/products', productsHandler);
app.use('/accounts', accountRoute);
app.use('/compras', comprasRoute);
app.use('/nextid', idRoute);



// DB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log("DB Connected");
})
.catch ((err) => {
    console.log(err);
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);