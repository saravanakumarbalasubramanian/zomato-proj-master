// Libraries
import express from "express";
import passport from "passport";
// Database Model
import {RestaurantModel} from "../../database/allModel";


const Router = express.Router();

/*
Route    /
Des      Get all the restaurant details based on city
Params   none
Access   Public
Method   GET
*/

Router.get("/", async (req, res) => {
   try {
    // const city = req.query.city; -> we can use this model also 
    const {city} = req.query; // destructuring the city
    const restaurants = await RestaurantModel.find({city});
    return res.json({ restaurants });
} catch (error) {
     return res.status(500).json({message: error.message})
   }
});


/*
Route    /
Des      Get individual restaurant details based on id
Params   id
Access   Public
Method   GET
*/
Router.get("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const restaurant = await RestaurantModel.findOne(_id);
    if(!restaurant) return res.status(404).json({error: "Restaurant Not Found"});
    return res.json({restaurant});
  } catch (error) {
    return res.status(500).json({message: error.message})   
  }
});


/*
Route    /Search
Des      Get individual restaurant details based on search string
Params   none
body     SearchString
Access   Public
Method   GET
*/
Router.get("/search", async (req, res) => {
   try {
     const {searchString} = req.body;
     const restaurants = await RestaurantModel.find({
        name: { $regex: searchString , $options: "i" },
     });
     if(!restaurants) return res.status(404).json({error: `No Restaurant Matched With ${searchString}` });
     return res.json({restaurants});
   } catch (error) {
     return res.status(500).json({message: error.message}) ;  
   }
 });

  
export default Router;