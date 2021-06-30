// import multer from "multer";
// import express from "express";
// // import { isAdmin, isAuth } from "../utils.js";

// const uploadRouter = express.Router();
// const maxSize = 1 * 1024 * 1024; // 1 mb

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },

//   filename(req, file, cb) {
//     cb(null, `${Date.now()}.jpg`);
//   },
// });

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: maxSize,
//   },
// });

// uploadRouter.post("/", upload.single("image"), (req, res) => {
//   res.send(`/${req.file.path}`);
// });

// export default uploadRouter;

import multer from "multer";
import express from "express";
// import { isAuth } from '../utils.js';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

uploadRouter.post("/companyid", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});
uploadRouter.post("/govid", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default uploadRouter;
