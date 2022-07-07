// IMporting env Variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Import MicroServices Routes 
import Auth from "./API/Auth"

// DataBase Connection 
import ConnectDB from "./database/connection";


const zomato = express();

// middlewares 
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());

// Application Routes
zomato.use("/auth", Auth);

zomato.get("/" , (req, res) => res.json({message: "Setup Success"}));

zomato.listen(300, () => ConnectDB().then(() => console.log("Server is Running 🚀"))
  .catch(() => console.log("server is running, but the database connection failed "))
); 