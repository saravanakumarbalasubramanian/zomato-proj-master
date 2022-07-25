import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: { type: String, requried: true },
    descript: { type: String, requried: true },
    isVeg: { type: Boolean, requried: true },
    isContainsEgg: { type: Boolean, requried: true },
    category: { type: String, requried: true },
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    price: { type: Number, default: 150, requried: true },
    addOns: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
        },
    ],
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
        required: true,
    },
    reviews: {
        type: mongoose.Types.ObjectId,
        ref: "Reviews",
    },
},
    {
        timestamps: true,
    },
);

export const FoodModel = mongoose.model("Foods", FoodSchema);