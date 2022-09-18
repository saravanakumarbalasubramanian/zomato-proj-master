import express from "express";
import passport from "passport";
// Database Model
import { UserModel } from "../../database/allModel";

const Router = express.Router();


/*
Route    /
Des      Get User Data
Params   _id
Body     none
Access   Public
Method   Get
*/
Router.get("/",passport.authenticate("jwt"), async(req, res) => {
   try {
   const {email, phoneNumber, fullName, address} = req.session.passport.user._doc;
      return res.json({ user: {email, phoneNumber, fullName, address}});
   } catch (error) {
    return res.status(500).json({message: error.message});
   }
});
/*
Route    /:_id
Des      Get User Data
Params   _id
Body     none
Access   Public
Method   Get
*/
Router.get("/",async(req, res) => {
   try {
      const user = await UserModel.findById(req.params._id);
      const { fullname } = user;
      return res.json({ user: { fullname }});
   } catch (error) {
    return res.status(500).json({message: error.message});
   }
});


/*
Route    /update/:_id
Des      update User id
Params   _id
Body     user data
Access   Public
Method   PUT
*/
Router.put("/update/:userId", async (req, res) => {
   try {
      const { userId } = req.params;
      const {userData} = req.body;

      const updateUserData = await UserModel.findByIdAndUpdate( userId, 
        {$set: userData},
        { new: true },
        );
        return res.json({user: updateUserData});
   } catch (error) {
    return res.status(500).json({message: error.message});
   }
});


export default Router ;