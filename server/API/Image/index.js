// Libraries
import express from "express";
import passport from "passport";

import multer from "multer";
// Database Model
import { ImageModel } from "../../database/allModel";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";


const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });



/*  
Route    /
Des      Uploads given images to S3 bucket, and save file link to mongoDB
Params   category
Access   Public
Method   GET
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        // s3 bucket options
        const bucketOptions = {
            Bucket: "zomato-main-project",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read",
        }; 
  const uploadImage = await s3Upload(bucketOptions);
      return res.status(200).json({uploadImage});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


export default Router;