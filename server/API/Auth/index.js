// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
// Models
// we are destructuring the UserModel because we are simply exported the usermodel we are not exported by default so we have to destructure it 
import { UserModel } from "../../database/user";

// validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

const Router = express.Router();

/*
Route    /signup
Des      Register the user
Params   none
Access   Public
Method   POST
*/

Router.post("/signup", async (req, res) => {
  

  
  try {
 
    await ValidateSignup(req.body.credentials);

    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);
    // generate JWT auth Token
    const token = newUser.generateJwtToken();
    // Return
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/*
Route    /signin
Des      Signin with Email and Password
Params   none
Access   Public
Method   POST
*/
Router.post("/signin", async (req, res) => {
  try {
    await ValidateSignin(req.body.credentials);
    
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);


    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



/*
Route    /google
Des       google Signin 
Params   none
Access   Public
Method   get
*/

Router.get("/google", passport.authenticate("google",
  {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",

    ],
  })
);


/*
Route    /google/callback
Des       google Signin callback
Params   none
Access   Public
Method   get
*/

Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
 (req, res) => {
  return res.json({token: req.session.passport.user.token});
 }
);

export default Router;