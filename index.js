
var express = require('express')
var app = express()

//connect to sqlite3 database
var db= require("./database.js")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var HTTP_PORT = 8000
app.listen(HTTP_PORT,()=>{

  console.log("Working")
})

app.get('/',(req,res)=>{
  res.send('Hello world');


});

app.get('/api/cars',(req,res)=>{
//getting and inserting data
var sql = 'SELECT * FROM Cars WHERE Car_ID = COALESCE(?, Car_ID) AND Year = COALESCE(?,Year) AND Make=COALESCE(?,Make) AND Racer_Turbo=COALESCE(?,Racer_Turbo) AND Racer_Supercharged = COALESCE(?,Racer_Supercharged) AND Racer_Performance=COALESCE(?, Racer_Performance)AND Racer_Horsepower=COALESCE(?,Racer_Horsepower) AND Car_Overall=COALESCE(?,Car_Overall) AND Engine_Modifications=COALESCE(?,Engine_Modifications)AND Engine_Performance=COALESCE(?,Engine_Performance) AND Engine_Chrome=COALESCE(?,Engine_Chrome) AND Engine_Detailing=COALESCE(?,Engine_Detailing)AND Engine_Cleanliness=COALESCE(?,Engine_Cleanliness) AND Body_Frame_Undercarriage=COALESCE(?,Body_Frame_Undercarriage) AND Body_Frame_Suspension=COALESCE(?,Body_Frame_Suspension)AND Body_Frame_Chrome=COALESCE(?,Body_Frame_Chrome) AND Body_Frame_Detailing=COALESCE(?,Body_Frame_Detailing) AND Body_Frame_Cleanliness=COALESCE(?,Body_Frame_Cleanliness)AND Mods_Paint=COALESCE(?,Mods_Paint) AND Mods_Body = COALESCE(?,Mods_Body) AND Mods_Wrap=COALESCE(?,Mods_Wrap) AND Mods_Rims=COALESCE(?,Mods_Rims) AND Mods_Interior=COALESCE(?,Mods_Interior)AND Mods_Other= COALESCE(?,Mods_Other) AND Mods_ICE=COALESCE(?,Mods_ICE) AND Mods_Aftermarket=COALESCE(?,Mods_Aftermarket) AND Mods_WIP=COALESCE(?,Mods_WIP) AND Mods_Overall=COALESCE(?,Mods_Overall)'
var params = [req.query.carid, req.query.year, req.query.make, req.query.model,req.query.racerturbo,req.query.racersupercharged,req.query.racerperformance,req.query.racerhorsepower,req.query.caroverall,req.query.enginemodifications,req.query.engineperformance,req.query.enginechrome,req.query.enginedetailing,req.query.enginecleanliness,req.query.bodyframeundercarriage,req.query.bodyframesuspension,req.query.bodyframechrome,req.query.bodyframedetailing,req.query.bodyframecleanliness,req.query.modspaint,req.query.modsbody,req.query.modswrap,req.query.modsrims,req.query.modsinterior,req.query.modsother,req.query.ice,req.query.modsaftermarket,req.query.modswip,req.query.modsoverall]
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

app.post('/api/newCar/',(req,res)=>{
var data={
Car_ID: req.body.carid,
Year: req.body.year,
Make: req.body.make,
Model: req.body.model,
Racer_Turbo: req.body.racerturbo,
Racer_Supercharged: req.body.racersupercharged,
Racer_Performance: req.body.racerperformance,
Racer_Horsepower: req.body.racerhorsepower,
Car_Overall: req.body.caroverall,
Engine_Modifications: req.body.enginemodifications,
Engine_Performance: req.body.engineperformance,
Engine_Chrome: req.body.enginechrome,
Engine_Detailing: req.body.enginedetailing,
Engine_Cleanliness: req.body.enginecleanliness,
Body_Frame_Undercarriage: req.body.bodyframeundercarriage,
Body_Frame_Suspension: req.body.bodyframesuspension,
Body_Frame_Chrome: req.body.bodyframechrome,
Body_Frame_Detailing: req.body.bodyframedetailing,
Body_Frame_Cleanliness: req.body.bodyframecleanliness,
Mods_Paint: req.body.modspaint,
Mods_Body: req.body.modsbody,
Mods_Wrap: req.body.modswrap,
Mods_Rims: req.body.modsrims,
Mods_Interior: req.body.modsinterior,
Mods_Other: req.body.modsother,
Mods_ICE: req.body.modsice,
Mods_Aftermarket: req.body.modsaftermarket,
Mods_WIP: req.body.modswip,
Mods_Overall: req.body.modsoverall



}


var sql = 'INSERT INTO cars (Car_ID, Year, Make, Model, Racer_Turbo, Racer_Supercharged, Racer_Performance, Racer_Horsepower, Car_Overall, Engine_Modifications, Engine_Performance, Engine_Chrome, Engine_Detailing, Engine_Cleanliness, Body_Frame_Undercarriage, Body_Frame_Suspension, Body_Frame_Chrome, Body_Frame_Detailing, Body_Frame_Cleanliness, Mods_Paint, Mods_Body, Mods_Wrap, Mods_Rims, Mods_Interior, Mods_Other, Mods_ICE, Mods_Aftermarket, Mods_WIP, Mods_Overall) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
var params=[data.carid,data.year,data.make,data.model,data.racerturbo,data.racersupercharged,data.racerperformance,data.racerhorsepower,data.caroverall,data.enginemodifications,data.engineperformance,data.enginechrome,data.enginedetailing,data.enginecleanliness,data.bodyframeundercarriage,data.Body_Frame_Suspension,data.bodyframechrome,data.bodyframedetailing,data.bodyframecleanliness,data.modspaint,data.modsbody,data.modswrap,data.modsrims,data.modsinterior,data.modsother,data.modsice,data.modsaftermarket,data.modswip,data.modsoverall]
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

})





app.listen(3000,()=> console.log('listening on port 3000'));
