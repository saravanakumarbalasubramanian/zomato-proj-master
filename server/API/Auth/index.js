// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Models
// we are destructuring the UserModel because we are simply exported the usermodel we are not exported by default so we have to destructure it 
import {UserModel} from "../../database/user";

const Router = express.Router();

/*
Route    /signup
Des      Signup with Email and Password
Params   none
Access   Public
Method   POST
*/

Router.post("/signup", async(req, res) =>{
   try {
       const {email, password, fullname, phoneNumber} = req.body.credentials;

       // check whether email exist

       const checkUserByEmail = await UserModel.findOne({email});
       const checkUserByPhone = await UserModel.findOne({phoneNumber});

       if( checkUserByEmail || checkUserByPhone ) {
        return res.json({ error: "User already exist!"});
       }
       // hash password
       const bcryptSalt = await bcrypt.genSalt(5);

       const hashedPassword = await bcrypt.hash(password, bcryptSalt);

       // Save to DB
       await UserModel.create({
         ...req.body.credentials,
         password: hashedPassword,
       });
       // generate JWT auth Token
        const token = jwt.sign({user: { fullname, email}} , "ZomatoAPP");
       // Return
       return res.status(200).json({ token, status:"success"});

   } catch (error) {
     return res.status(500).json({error: error.meaasge});
   }
});

export default Router;