const mongoose = require("mongoose");
const uri = "mongodb+srv://victoria:CursoMDB@curso-mongodb.ykish.mongodb.net/test/crm-clientes";
const DBConecction = async()=>{
    try{
        await mongoose.connect(uri);
        console.log('DB is connected');
    }catch (error){
        console.log(error);
        throw new Error('Failed to initialize database');
    }
};

module.exports = DBConecction;