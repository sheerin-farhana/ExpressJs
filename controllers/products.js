const path = require('path');
const rootDir = require('../util/path');

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct = (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
};

exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
};

exports.getSuccess = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
};

exports.postContactUs = (req,res,next) => {
    res.redirect('/success');
 };