
var express = require('express')

const routes=require('./routes/api')
var app = express()

//app.use(bodyParser.json());
//app.use('/api',routes);

//connect to sqlite3 database
var db= require("./database.js")

var bodyParser = require("body-parser");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.send('Hello world');


});

app.get('/api/cars',(req,res)=>{
//getting and inserting data
var sql = 'SELECT * FROM Cars WHERE Car_ID = COALESCE(?, Car_ID) AND Year = COALESCE(?,Year) AND Make=COALESCE(?,Make) AND Model=COALESCE(?,Model)'
var params = [req.query.carid, req.query.year, req.query.make, req.query.model]
db.all(sql,params,(err,rows)=>{
  if(err){

    res.status(400).json({"error":err.message})
    return;
  }

   res.json({

     "data": rows
   })




});


});

app.get('/api/owners',(req,res)=>{
var sql='SELECT * FROM Owners WHERE Car_ID=COALESCE(?,Car_ID) AND Name =COALESCE(?,Name) AND Email=COALESCE(?,Email)'
var params = [req.query.Car_ID, req.query.Name, req.query.email]
db.all(sql,params,(err,rows)=>{
  if(err){

    res.status(400).json({"error":err.message})
    return;
  }

   res.json({

     "data": rows
   })




});


});

app.get('/api/cars/:carid',(req,res)=>{
var sql='SELECT * FROM Cars WHERE Car_ID= ?'
var params= [req.params.carid]

db.get(sql,params,(err,row)=>{
  if(err){
    res.status(400).json({"error":err.message})
    return;

  }
  res.json({
      "data": row



  })



});


});
app.get('/getdata/Owners/:name',(req,res)=>{
var sql='SELECT * FROM Owners WHERE Name= ?'
var params= [req.params.name]

db.get(sql,params,(err,row)=>{
  if(err){
    res.status(400).json({"error":err.message})
    return;

  }
  res.json({
      "data": row



  })



});


});

app.post('/api/cars/',(req,res)=>{
/*
var data={
Car_ID: req.body.carid,
Year: req.body.year,
Make: req.body.make,
Model: req.body.model


}


var sql = 'INSERT INTO cars (Car_ID, Year, Make, Model, ?, ?, ?, ?)'
var params=[data.carid,data.year,data.make,data.model]
db.run(sql,params,function(err,result){
  if(err){
    res.status(400).json({"error":err.message})
    return;
  }
res.json({

    "data":data,
    "id": this.lastID
})

})

});





app.listen(3000,()=> console.log('listening on port 3000'));
