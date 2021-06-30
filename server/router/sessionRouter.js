import express from "express";
import expressAsyncHandler from "express-async-handler";
// import bcrypt from "bcryptjs";
// import data from "../data.js";
import sessions from "../models/SessionModel.js";
// import { generateToken, isAdmin, isAuth } from "../utils.js";

const sessionRouter = express.Router();

//Push Dummy Data ( Use this route only once)

// sessionRouter.get(
//   "/seed-session",
//   expressAsyncHandler(async (req, res) => {
//     await sessions.remove({});
//     const createdSessions = await sessions.insertMany(data.sessions);
//     res.send({ createdSessions });
//   })
// );

// Create a new session

sessionRouter.post(
  "/organize-session",
  expressAsyncHandler(async (req, res) => {
    // get current date and session date . Compare both
    var current = new Date();

    var ses_date = req.body.Dateinfo;
    var msec = Date.parse(ses_date);
    var session_date = new Date(msec);
    console.log(req.body);
    if(req.body.Referral != true){
      req.body.Referral = false;
    }
    if(req.body.Test != true){
      req.body.Test = false;
    }
    if(req.body.Interview != true){
      req.body.Interview = false;
    }
    if(req.body.multipleOrganizers != true){
      req.body.multipleOrganizers = false;
    }
    if(req.body.multipleStudents != true){
      req.body.multipleStudents = false;
    }

    // if (session_date > current) {
    const Sessions = new sessions({
      sessionName: req.body.sessionName,
      DateInfo: req.body.DateInfo,
      Price: req.body.Price,
      Referral: req.body.Referral,
      Test: req.body.Test,
      Interview: req.body.Interview,
      multipleOrganizers: req.body.multipleOrganizers,
      multipleStudents: req.body.multipleStudents,
      Testlink: req.body.Testlink,
      Organizers: req.body.Organizers,
      Participants: req.body.Participants,
    });
    const createdSession = await Sessions.save();
   res.send({
      _id: createdSession._id,
      sessionName: createdSession.sessionName,
      DateInfo: createdSession.Date,
      Price: createdSession.Price,
      Referral: createdSession.Referral,
      Test: createdSession.Test,
      Interview: createdSession.Interview,
      multipleOrganizers: createdSession.multipleOrganizers,
      multipleStudents: createdSession.multipleStudents,
      Testlink: createdSession.Testlink,
      Organizers: createdSession.Organizers,
      Participants: createdSession.Participants,

   
    });
    console.log("here2");
  
    res.status(401).send({ message: "Invalid date or time ." });
  })
);


sessionRouter.put(
  "/update-session",
  expressAsyncHandler(async (req, res) => {
    const sessionID = req.body._id;
    const Session = await sessions.findById(sessionID);
    if (Session) {
      (Session.sessionName = req.body.sessionName),
        (Session.Dat = req.body.Date),
        (Session.Price = req.body.Price),
        (Session.Referral = req.body.Referral),
        (Session.Test = req.body.Test),
        (Session.Interview = req.body.Interview),
        (Session.multipleOrganizers = req.body.multipleOrganizers),
        (Session.multipleStudent = req.body.multipleStudents),
        (Session.Testlin = req.body.Testlink),
        (Session.Organizers = req.body.Organizers),
        (Session.Participants = req.body.Participants);

      const updatedSession = await Session.save();
      res.send({
        message: "Session details has been successfully updated!",
        Session: updatedSession,
      });
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Find Session by Session ID

sessionRouter.get(
  "/getsession-ID",
  expressAsyncHandler(async (req, res) => {
    const session = await sessions.findById(req.body._id);
    if (session) {
      res.send(session);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);
sessionRouter.get(
  "/findsession",
  expressAsyncHandler(async (req, res) => {
    const session = await sessions.find({});
    if (session) {
      res.send(session);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Filter all Sessions corresponding to given Session Name

sessionRouter.get(
  "/getsession-name",
  expressAsyncHandler(async (req, res) => {
    const session = await sessions.find({ sessionName: req.body.sessionName });

    if (session) {
      res.send(session);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Filter Session by time . All sesions ahead of the start time are displayed

sessionRouter.get(
  "/getsession-time",
  expressAsyncHandler(async (req, res) => {
    const session = await sessions.find({});

    // get start time

    var ses_date = req.body.Date;
    var msec = Date.parse(ses_date);
    var start_date = new Date(msec);

    //traverse the sesssion array and retrieve the sessions which are after start time

    var filtered_sessions = [];

    for (var i = 0; i < session.length; i++) {
      var this_date = session[i].Date;
      var nsec = Date.parse(this_date);
      var DateOfSession = new Date(nsec);

      if (DateOfSession > start_date) {
        filtered_sessions.push(session[i]);
      }
    }

    if (filtered_sessions) {
      res.send(filtered_sessions);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Filter Sessions by Session Price : All sessions below the given price is listed

sessionRouter.get(
  "/getsession-price",
  expressAsyncHandler(async (req, res) => {
    const session = await sessions.find({});

    // get maximum price

    const max_price = req.body.Price;

    //traverse the sesssion array and retrieve the sessions which are below the max_price

    var filtered_sessions = [];

    for (var i = 0; i < session.length; i++) {
      if (session[i].Price < max_price) {
        filtered_sessions.push(session[i]);
      }
    }

    if (filtered_sessions) {
      res.send(filtered_sessions);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Filter Sessions which have referral

sessionRouter.get(
  "/getsession-referral",
  expressAsyncHandler(async (req, res) => {
    const session = await sessions.find({});

    //traverse the sesssion array and retrieve the sessions which have referral

    var filtered_sessions = [];

    for (var i = 0; i < session.length; i++) {
      if (session[i].Referral == true) {
        filtered_sessions.push(session[i]);
      }
    }

    if (filtered_sessions) {
      res.send(filtered_sessions);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Filter Sessions which do not have referral

sessionRouter.get(
  "/getsession-withoutreferral",
  expressAsyncHandler(async (req, res) => {
    const session = await sessions.find({});

    //traverse the sesssion array and retrieve the sessions which do not have referral

    var filtered_sessions = [];

    for (var i = 0; i < session.length; i++) {
      if (session[i].Referral == false) {
        filtered_sessions.push(session[i]);
      }
    }

    if (filtered_sessions) {
      res.send(filtered_sessions);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Become a mentor for an existing session . Here , some other mentor has created this session

sessionRouter.put(
  "/BecomeMentorForexisiting-session",
  expressAsyncHandler(async (req, res) => {
    const sessionID = req.body._id;
    const Session = await sessions.findById(sessionID);
    if (Session) {
      Session.Organizers.push(req.body.userID);

      const updatedSession = await Session.save();
      res.send({
        message: "Now you are also a mentor for this session!",
        Session: updatedSession,
      });
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Route for a Mentee to join an existing session

sessionRouter.put(
  "/Registerfor-session",
  expressAsyncHandler(async (req, res) => {
    const sessionID = req.body._id;
    const Session = await sessions.findById(sessionID);
    if (Session) {
      Session.Participants.push(req.body.userID);

      const updatedSession = await Session.save();
      res.send({
        message: "You have been successfully registered for this session!",
        Session: updatedSession,
      });
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Route for a Mentor to unregister an existing session

sessionRouter.put(
  "/Unregister-mentor-session",
  expressAsyncHandler(async (req, res) => {
    const sessionID = req.body._id;
    const Session = await sessions.findById(sessionID);
    if (Session) {
      const index = Session.Organizers.indexOf(req.body.userID);

      if (index > -1) {
        Session.Organizers.splice(index, 1);
        const updatedSession = await Session.save();
        res.send({
          message:
            " Session appointment cancelled . You are no longer a Mentor for this session!",
          Session: updatedSession,
        });
      } else {
        res
          .status(404)
          .send({ message: "You are not booked for this session" });
      }
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Route for a Mentee to unregister an existing session

sessionRouter.put(
  "/Unregister-mentee-session",
  expressAsyncHandler(async (req, res) => {
    const sessionID = req.body._id;
    const Session = await sessions.findById(sessionID);
    if (Session) {
      const index = Session.Participants.indexOf(req.body.userID);

      if (index > -1) {
        Session.Participants.splice(index, 1);
        const updatedSession = await Session.save();
        res.send({
          message: "You have been unregistered from this session!",
          Session: updatedSession,
        });
      } else {
        res
          .status(404)
          .send({ message: "You are not booked for this session" });
      }
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Show all sessions corresponding to a given Mentor in his/her dashboard

sessionRouter.get(
  "/show-mentor-session",
  expressAsyncHandler(async (req, res) => {
    const userID = req.body.userID;
    const Session = await sessions.find({});

    var filtered_sessions = [];

    for (var i = 0; i < Session.length; i++) {
      const index = Session[i].Organizers.indexOf(userID);
      if (index > -1) {
        filtered_sessions.push(Session[i]);
      }
    }
    if (filtered_sessions) {
      res.send(filtered_sessions);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

// Show all sessions corresponding to a given Mentee in his/her dashboard

sessionRouter.get(
  "/show-mentee-session",
  expressAsyncHandler(async (req, res) => {
    const userID = req.body.userID;
    const Session = await sessions.find({});

    var filtered_sessions = [];

    for (var i = 0; i < Session.length; i++) {
      const index = Session[i].Participants.indexOf(userID);
      if (index > -1) {
        filtered_sessions.push(Session[i]);
      }
    }
    if (filtered_sessions) {
      res.send(filtered_sessions);
    } else {
      res.status(404).send({ message: "Session Not Found" });
    }
  })
);

export default sessionRouter;
