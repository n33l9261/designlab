import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import Mentee from "../models/menteeModel.js";
import { generateToken, isAdmin, isAuth } from "../util.js";

const menteeRouter = express.Router();

// Push Dummy Data

menteeRouter.get(
  "/seed-mentee",
  expressAsyncHandler(async (req, res) => {
    await Mentee.remove({});
    const createdUsers = await Mentee.insertMany(data.users_mentee);
    res.send({ createdUsers });
  })
);

// Sign in Route  for Mentees

menteeRouter.post(
  "/signin-mentee",
  expressAsyncHandler(async (req, res) => {
    const user = await Mentee.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          isAdmin: user.isAdmin,
          mobilenumber: user.mobilenumber,
          instituteName: user.instituteName,
          enrollmentNumber: user.enrollmentNumber,
          address: user.address,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

// Registration Route  for Mentees

menteeRouter.post(
  "/register-mentee",
  expressAsyncHandler(async (req, res) => {
    const user = new Mentee({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      mobilenumber: req.body.mobilenumber,
      instituteName: req.body.instituteName,
      enrollmentNumber: req.body.enrollmentNumber,
      address: req.body.address,
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      password: createdUser.password,
      mobilenumber: createdUser.mobilenumber,
      instituteName: createdUser.instituteName,
      enrollmentNumber: createdUser.enrollmentNumber,
      address: createdUser.address,
      token: generateToken(createdUser),
    });
  })
);

// Fetching a Mentee using a mentee ID

// menteeRouter.get(
//   "/:id",
//   isAuth,
//   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const user = await Mentee.findById(req.body.id);
//     if (user) {
//       res.send(user);
//     } else {
//       res.status(404).send({ message: "Mentee Not Found" });
//     }
//   })
// );

// getting mentee list
menteeRouter.get(
  `/menteelist`,
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    const userMentee = await Mentee.find({});
    if (userMentee) {
      res.send(userMentee);
    } else {
      res.status(404).send({ message: "Mentee Not Found" });
    }
  })
);

// menteeRouter.post(
//   "/menteedetailsemail",

//   expressAsyncHandler(async (req, res) => {
//     const user = await Mentor.findOne({ email: req.body.email });
//     if (user) {
//       res.send(user);
//     } else {
//       res.status(404).send({ message: "Mentor Not Found" });
//     }
//   })
// );

menteeRouter.post(
  "/menteedetailsemail",
  expressAsyncHandler(async (req, res) => {
    const user = await Mentee.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          isAdmin: user.isAdmin,
          mobilenumber: user.mobilenumber,
          instituteName: user.instituteName,
          enrollmentNumber: user.enrollmentNumber,
          address: user.address,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

export default menteeRouter;
