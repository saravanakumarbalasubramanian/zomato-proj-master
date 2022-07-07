// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Models
// we are destructuring the UserModel because we are simply exported the usermodel we are not exported by default so we have to destructure it 
import { UserModel } from "../../database/user";

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

  const user =  await UserModel.findByEmailAndPassword(req.body.credentials);

   
    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


export default Router;