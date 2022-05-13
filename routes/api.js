const express = require('express');
const router = express.Router();

//get cars from db
router.get('/cars',function(req,res){

  res.send({type:'Get'});


});
// add new car into db
router.post('/cars',function(req,res){
  console.log(req.body);
  res.send({type:'Post'});


});
//update car in db
router.put('/cars/:carid',function(req,res){

  res.send({type:'put'});


});
//delete cars in db
router.delete('/cars/:id',function(req,res){

  res.send({type:'Delete'});


});
module.exports=router;
