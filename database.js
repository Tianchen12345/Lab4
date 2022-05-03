var sqlite3 = require('sqlite3').verbose()

const DB ="lab4.db"

let db = new sqlite3.Database(DB,(err)=>{

  if(err){

    console.error(err.message)
    throw err
  }
  else{
    console.log('Connected')



  }



});

module.exports=db
