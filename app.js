
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact')
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);



app.use((req,res,next) => {
    // res.status(404).send('<h1>Page Not Found !!</h1>');
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});

app.listen(3000);
