const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
        const conn =  await mongoose.connect(process.env.MONGO_URI,
            {
                useUnifiedTopology:true,
                useNewUrlParser:true 
            });
        console.log("Connected to MongoDb Successfully")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};
module.exports = connectDb;