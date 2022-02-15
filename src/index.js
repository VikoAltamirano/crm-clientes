const express = require("express");
const morgan = require("morgan");
const productRoutes = require("../src/routes/product.route");
const customerRoutes = require("../src/routes/customer.route");
const cors  = require("cors");
const DBConecction = require("../src/database/DBConecction.js")
const config = require("./config")
//Camel case
async function startExpressServer(params){
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
const baseURL = "/api/v1";

app.use(`${baseURL}/product`, productRoutes)
app.use(`${baseURL}/customer`, customerRoutes)


app.get('/', (request, response)=>{


response.json({message: "HOLA DESDE EL SERVIDOR :)"});

});

await DBConecction();

const PORT=4000;
app.listen(config.port, ()=>{
    console.log(`Server listo en: http://localhost:${config.port}`);
});

}
startExpressServer();