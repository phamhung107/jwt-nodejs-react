import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();
const PORT = process.PORT || 8080;
//config view engine
configViewEngine(app);
//config body-parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Back end is running " + PORT);
});
