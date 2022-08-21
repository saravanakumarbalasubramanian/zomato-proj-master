// Libraries
import express from "express";
import passport from "passport";
// Database Model
import { FoodModel } from "../../database/allModel";

// Validation
import { ValidateRestaurantId, Validatecategory } from "../../validation/food";


const Router = express.Router();



// @Route   POST /foods/new
// @des     add new food record to database
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { foodData } = req.body;
    const newFood = await FoodModel.create(foodData);
    return res.json({ foods: newFood });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /r  -> r stands for restaurants
Des      Get all food based on particular restaurant
Params   id
Access   Public
Method   GET
*/
Router.get("/r/:_id", async (req, res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id })
    return res.json({ foods })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
});



/*
Route    /c 
Des      Get all food based on particular category
Params   category
Access   Public
Method   GET
*/
Router.get("/r/:category", async (req, res) => {
  try {
    await Validatecategory(req.params);

    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });
    return res.json({ foods })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
});

export default Router;