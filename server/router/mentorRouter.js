import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import Mentor from "../models/mentorModel.js";
import { generateToken, isAdmin, isAuth } from "../util.js";

const mentorRouter = express.Router();

// // Push Dummy Data

mentorRouter.get(
  "/seed-mentor",
  expressAsyncHandler(async (req, res) => {
    await Mentor.remove({});
    const createdUsers = await Mentor.insertMany(data.users_mentor);
    res.send({ createdUsers });
  })
);

// Sign in Route  for Mentors

mentorRouter.post(
  "/signin-mentor",
  expressAsyncHandler(async (req, res) => {
    const user = await Mentor.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          // _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,

          mobilenumber: user.mobilenumber,
          companyName: user.comapanyName,
          employeeIDNumber: user.employeeIDNumber,
          address: user.address,
          employeeIDimage: user.employeeIDimage,
          governmentIDimage: user.governmentIDimage,
          isAdmin: user.isAdmin,

          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

// Registration Route  for Mentors

mentorRouter.post(
  "/register-mentor",
  expressAsyncHandler(async (req, res) => {
    const user = new Mentor({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      mobilenumber: req.body.mobilenumber,
      companyName: req.body.companyName,
      employeeIDNumber: req.body.employeeIDNumber,
      address: req.body.address,
      verificationstatus: req.body.verificationstatus,
      // isAdmin: req.body.address,
      // employeeIDimage: req.body.employeeIDimage,
      // governmentIDimage: req.body.governmentIDimage,
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      password: createdUser.password,

      mobilenumber: createdUser.mobilenumber,
      comapanyName: createdUser.comapanyName,
      employeeIDNumber: createdUser.employeeIDNumber,
      address: createdUser.address,
      isAdmin: createdUser.isAdmin,
      verificationstatus: createdUser.verificationstatus,
      // employeeIDimage: createdUser.employeeIDimage,
      // governmentIDimage: createdUser.governmentIDimage,
      token: generateToken(createdUser),
    });
  })
);

// fetching Mentor using Mentor ID

mentorRouter.get(
  "/mentordetailsemail",

  expressAsyncHandler(async (req, res) => {
    const mentors = await Mentor.find({ user: req.body._id });
    if (user) {
      res.send(mentorprofile);
    } else {
      res.status(404).send({ message: "Mentor Not Found" });
    }
  })
);

// mentorRouter.post(
//   "/mentordetailsemail",

//   expressAsyncHandler(async (req, res) => {
//     const user = await Mentor.findOne({ email: req.body.email });
//     if (user) {
//       res.send(user);
//     } else {
//       res.status(404).send({ message: "Mentor Not Found" });
//     }
//   })
// );

// Approving Mentors
// mentorRouter.put(
//   "/approved-mentor",
//   expressAsyncHandler(async (req, res) => {
//     const userID = req.body.id;
//     const mentor = await Mentor.findById(userID);
//     if (mentor) {
//       mentor.name = req.body.name;
//       (mentor.email = req.body.email),
//         (mentor.password = bcrypt.hashSync(req.body.password, 8)),
//         (mentor.mobilenumber = req.body.mobilenumber),
//         (mentor.companyName = req.body.companyName),
//         (mentor.employeeIDNumber = req.body.employeeIDNumber),
//         (mentor.address = req.body.address),
//         (mentor.employeeIDimage = req.body.employeeIDimage),
//         (mentor.governmentIDimage = req.body.governmentIDimage),
//         (mentor.verificationstatus = true);
//       const updatedProfile = await mentor.save();
//       res.send({
//         message: "Mentor profile Approved for further process !",
//         mentor: updatedProfile,
//       });
//     } else {
//       res.status(404).send({ message: "Mentor Not Found" });
//     }
//   })
// );

// getting mentor list
mentorRouter.get(
  `/mentorlist`,
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    const userMentor = await Mentor.find({});
    if (userMentor) {
      res.send(userMentor);
    } else {
      res.status(404).send({ message: "Mentor Not Found" });
    }
  })
);

mentorRouter.get(
  `/mentorlist/:id`,
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    const userMentor = await Mentor.findById(req.params.id);
    if (userMentor) {
      res.send(userMentor);
    } else {
      res.status(404).send({ message: "Mentor Not Found" });
    }
  })
);

// edit mentor

mentorRouter.put(
  "/mentorlist/:id",

  expressAsyncHandler(async (req, res) => {
    const mentor = await Mentor.findById(req.params.id);
    if (mentor) {
      mentor.name = req.body.name || mentor.name;
      mentor.email = req.body.email || mentor.email;
      mentor.mobilenumber = req.body.mobilenumber || mentor.mobilenumber;
      mentor.companyName = req.body.companyName || mentor.companyName;
      mentor.employeeIDNumber =
        req.body.employeeIDNumber || mentor.employeeIDNumber;
      mentor.address = req.body.address || mentor.address;
      mentor.isAdmin = Boolean(req.body.isAdmin);
      mentor.verificationstatus = Boolean(req.body.verificationstatus);
      const updatedMentor = await mentor.save();
      res.send({ message: "Mentor Updated", mentor: updatedMentor });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);
mentorRouter.delete(
  "/mentorlist/:id",

  expressAsyncHandler(async (req, res) => {
    const user = await Mentor.findById(req.params.id);
    if (user) {
      if (
        user.email === "shuvro@admin.com" ||
        (user.email === "tester@admin.com" && user.isAdmin === true)
      ) {
        res.status(400).send({ message: "Can Not Delete Admin User" });
        return;
      }
      if (user.email === "owner@admin.com" && user.isAdmin === true) {
        res.send(400).send({ message: "Can Not Delete Admin User" });
      }
      const deleteUser = await user.remove();
      res.send({ message: "Mentor Deleted", deleteUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

export default mentorRouter;
