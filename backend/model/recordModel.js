const mongoose =  require("mongoose");
const recordSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    
},{timestamps:true})



const Record = mongoose.model("Record",recordSchema);
module.exports=Record;