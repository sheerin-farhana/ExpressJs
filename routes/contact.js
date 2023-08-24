const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
    // console.log(path.join(__dirname,'../','views','shop.html'));
});

router.get('/success',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
    console.log(path.join(rootDir,'views','success.html'));
})



router.post('/contact-us',(req,res,next) => {
   res.redirect('/success');
})

module.exports = router;