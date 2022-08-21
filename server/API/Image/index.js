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



// @Route   POST /images/new
// @des     add new images
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newImages = await ImageModel.create(req.body.imageData);
      return res.json({ images: newImages });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*  
Route    /
Des      push image to database
Params   none
Access   Public
Method   POST
*/
// Router.post("/" , async(req,res) => {
//     try {
//         const file = req.file;

//         // S3 bucket option
//         const bucketOptions = {
//             Bucket: "zomato-main-project",
//             Key : file.originalname,
//             Body: file.buffer,
//             ContentType: file.mimetype,
//             ACL: "public-read" , // Access Control LIst
//         };

//         const uploadImage = await s3Upload(bucketOptions);
//          await ImageModel.create({images : [ { location: uploadImage.Location }]})
//           return res.status(200).json({uploadImage});
//         } catch (error) {
//             return res.status(500).json({ message: error.message });
        
//     }
// })




/*  
Route    /
Des      Get Image Detials
Params   _id
Access   Public
Method   GET
*/
 Router.get("/:_id" , async(req,res) => {
    try {
        const image = await ImageModel.findById(req.params._id);
        return res.json({ image });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
 });


/*  
Route    /
Des      Uploads given images to S3 bucket, and save file link to mongoDB
Params   category
Access   Public
Method   POST
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