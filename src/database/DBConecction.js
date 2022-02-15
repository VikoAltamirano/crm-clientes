const mongoose = require("mongoose");
const config = require("../config")
const uri = "";
const DBConecction = async()=>{
    try{
        await mongoose.connect(config.mongoUri);
        console.log('DB is connected');
    }catch (error){
        console.log(error);
        throw new Error('Failed to initialize database');
    }
};

module.exports = DBConecction;