
var express = require('express')
var app = express()

//connect to sqlite3 database
var db= require("./database.js")
app.get('/',(req,res)=>{
  res.send('Hello world');


});
app.get('/getdata/cars',(req,res)=>{
//getting and inserting data 
var sql = 'SELECT * FROM Cars WHERE Car_ID = COALESCE(?, Car_ID) AND Year = COALESCE(?,Year) AND Make=COALESCE(?,Make) AND Racer_Turbo=COALESCE(?,Racer_Turbo) AND Racer_Supercharged = COALESCE(?,Racer_Supercharged) AND Racer_Performance=COALESCE(?, Racer_Performance)AND Racer_Horsepower=COALESCE(?,Racer_Horsepower) AND Car_Overall=COALESCE(?,Car_Overall) AND Engine_Modifications=COALESCE(?,Engine_Modifications)AND Engine_Performance=COALESCE(?,Engine_Performance) AND Engine_Chrome=COALESCE(?,Engine_Chrome) AND Engine_Detailing=COALESCE(?,Engine_Detailing)AND Engine_Cleanliness=COALESCE(?,Engine_Cleanliness) AND Body_Frame_Undercarriage=COALESCE(?,Body_Frame_Undercarriage) AND Body_Frame_Suspension=COALESCE(?,Body_Frame_Suspension)AND Body_Frame_Chrome=COALESCE(?,Body_Frame_Chrome) AND Body_Frame_Detailing=COALESCE(?,Body_Frame_Detailing) AND Body_Frame_Cleanliness=COALESCE(?,Body_Frame_Cleanliness)AND Mods_Paint=COALESCE(?,Mods_Paint) AND Mods_Body = COALESCE(?,Mods_Body) AND Mods_Wrap=COALESCE(?,Mods_Wrap) AND Mods_Rims=COALESCE(?,Mods_Rims) AND Mods_Interior=COALESCE(?,Mods_Interior)AND Mods_Other= COALESCE(?,Mods_Other) AND Mods_ICE=COALESCE(?,Mods_ICE) AND Mods_Aftermarket=COALESCE(?,Mods_Aftermarket) AND Mods_WIP=COALESCE(?,Mods_WIP) AND Mods_Overall=COALESCE(?,Mods_Overall)'
var tags = [req.query.carid, req.query.year, req.query.make, req.query.model,req.query.racerturbo,req.query.racersupercharged,req.query.racerperformance,req.query.racerhorsepower,req.query.caroverall,req.query.enginemodifications,req.query.engineperformance,req.query.enginechrome,req.query.enginedetailing,req.query.enginecleanliness,req.query.bodyframeundercarriage,req.query.bodyframesuspension,req.query.bodyframechrome,req.query.bodyframedetailing,req.query.bodyframecleanliness,req.query.modspaint,req.query.modsbody,req.query.modswrap,req.query.modsrims,req.query.modsinterior,req.query.modsother,req.query.ice,req.query.modsaftermarket,req.query.modswip,req.query.modsoverall]
db.all(sql,tags,(err,rows)=>{
  if(err){

    res.send('Error');
    return;
  }

   res.json({

     "data": rows
   })




});


});
app.get('/getdata/owners',(req,res)=>{
var sql='SELECT * FROM Owners WHERE Car_ID=COALESCE(?,Car_ID) AND Name =COALESCE(?,Name) AND Email=COALESCE(?,Email)'
var tags = [req.query.Car_ID, req.query.Name, req.query.email]
db.all(sql,tags,(err,rows)=>{
  if(err){

    res.send('Error');
    return;
  }

   res.json({

     "data": rows
   })




});


});
app.listen(3000,()=> console.log('listening on port 3000'));
