import express from "express";
import passport from "passport";
// Database Model
import { ReviewModel } from "../../database/allModel";

const Router = express.Router();

/*
Route    /restaurant
Des      Add new food review / rating
Params   resid
Body     None
Access   Public
Method   GET
*/
Router.get("/:resid", async (req, res) => {
    try {

        const reviews = await ReviewModel.find({restaurant: req.params.resid})

        return res.json({ reviews });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});



/*
Route    /new
Des      Add new food review / rating
Params   None
Body     Review Object
Access   Public
Method   POST
*/
Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Successfully Created Review." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


/*
Route    /delete
Des      Add new food review / rating
Params   _id
Body     None
Access   Public
Method   DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({ review: "Sucessfully Deleted the Review" });
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
});


export default Router;