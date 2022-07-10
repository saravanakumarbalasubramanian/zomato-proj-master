// Importing env Variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Import MicroServices Routes 
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
// DataBase Connection 
import ConnectDB from "./database/connection";

// import passport
import passport from "passport";



// config

import goooleAuthConfig from "./config/google.config";


const zomato = express();

// application middlewares 
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport Integration
goooleAuthConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);

zomato.get("/" , (req, res) => res.json({message: "Setup Success"}));

zomato.listen(300, () => ConnectDB().then(() => console.log("Server is Running 🚀"))
  .catch(() => console.log("server is running, but the database connection failed "))
); 