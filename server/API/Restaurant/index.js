// Libraries
import express from "express";
import passport from "passport";
// Database Model
import {RestaurantModel} from "../../database/allModel";

// Validation 
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();



/*
Route    /new
Des      Add New Restaurant in Database 
Params   none
Access   Public
Method   POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const newRetaurant = await RestaurantModel.create(req.body.retaurantData);
    return res.json({ restaurants: newRetaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



// @Route   PATCH /restaurants/update
// @des     update exisitng restaurant data
// @access  PRIVATE
Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
  try {
    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
      req.body.retaurantData._id,
      { $set: req.body.retaurantData },
      { new: true }
    );
    if (!updatedRestaurant)
      return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });

    return res.json({ restaurants: updatedRestaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE /restaurants/delete
// @des     update exisitng restaurant data
// @access  PRIVATE
Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
  try {
    const deleteRestaurant = await RestaurantModel.findByIdAndRemove(
      req.body.retaurantData._id
    );
    return res.json({ restaurants: Boolean(deleteRestaurant) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/*
Route    /
Des      Get all the restaurant details based on city
Params   none
Access   Public
Method   GET
*/

Router.get("/", async (req, res) => {
   try {

    await ValidateRestaurantCity(req.query);
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

    await ValidateRestaurantId(req.params);

    const {_id} = req.params;
    const restaurant = await RestaurantModel.findById(_id);
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

     await ValidateRestaurantSearchString(req.body); 

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