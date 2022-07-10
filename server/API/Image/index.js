// Libraries
import express from "express";
import passport from "passport";
import AWS from "aws-sdk";
import multer from "multer";
// Database Model
import { ImageModel } from "../../database/allModel";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// AWS s3 bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1",
});

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

        const s3Upload = (options) => {
            return new Promise((resolve, reject) =>
                s3Bucket.upload(options, (error, data) => {
                    if (error) return reject(error);
                    return resolve(data);
                })
            );
        };
  const uploadImage = await s3Upload(bucketOptions);
      return res.status(200).json({uploadImage});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


export default Router;