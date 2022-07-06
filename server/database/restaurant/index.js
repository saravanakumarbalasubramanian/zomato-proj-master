import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, requried: true },
    
    city: { type: String, requried: true },
    
    address: { type: String, requried: true },
    
    mapLocation: { type: String, requried: true },
    
    cuisine: [String],
    
    restaurantTimings: String,
    
    contactNumber: Number,
    
    website: Number,
   
    popularDishes: [String],
    
    averageCost: Number,
   
    amenites: [String],
   
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },

    menu: {
      type: mongoose.Types,ObjectId,
      ref: "Menus",
    },

    reviews: [{ type: mongoose.Types,ObjectId, ref: "Reviews"}],

    photos: { type: mongoose.Types,ObjectId, ref: "Images"},
});

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema)