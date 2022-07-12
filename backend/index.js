const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");
const Record = require('./model/recordModel')
//dotenv config
dotenv.config();

//Connect to MongoDb Database
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Route for Fetching Records
app.get('/getrecords',async(req,res)=>{
  const data =  await Record.find();
  // console.log(data);
  res.status(200).send(data);
})

// Route for Adding Record
app.post('/addrecord',(req,res)=>{
  let {title,description,tag} = req.body;
  Record.findOne({title:title},(err,record)=>{
    if(record){
      res.send({message:"A record with this title already exist"});
    }
    else{
      const record = new Record({title,description,tag});
      record.save((err)=>{
        if(err){
          res.send({message:err});
        }
        else{
          res.send({message:"Record Added Success"})
        }
      })
    }
  })
});

// Route for Updating the Records;
app.post("/updaterecord",async(req,res)=>{
  let {title,description,tag,id} = req.body;
  try{
    const newRecord = {};
    if(title){
      newRecord.title = title;
    }
    if(description){
      newRecord.description = description;
    }
    if(tag){
      newRecord.tag = tag;
    }
    let record = await Record.findById(id);
    if(!record){
      return res.status(404).send({message:"Record not Found"});
    }
    record = await Record.findByIdAndUpdate(id,{$set:newRecord},{new:true})
    res.status(200).send({record:record,message:"Update Success"});
  }
  catch{
    res.send({message:"Update Failed"})
  }
});

// Route for Deleting the Records

app.delete('/delete',async(req,res)=>{
  let {_id} = req.body;
  try{
    await Record.findByIdAndDelete(_id);
    res.send({message:"Record Deleted Success"});
  }
  catch{
    res.status(400).send({message:"Deletion Failed"});
  }
})


const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} Mode and listening on port 5000`
  );
});