import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { v4 as uuidV4 } from "uuid";
import Razorpay from "razorpay";
import sessions from "./models/SessionModel.js";
// import socketIO from "socket.io";
// import { socket } from "socket.io";
import { Server } from "socket.io";

import menteeRouter from "./router/menteeRouter.js";
import mentorRouter from "./router/mentorRouter.js";
import sessionRouter from "./router/sessionRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const serve = http.Server(app);
// const io = new Server(httpServer);
// const serve = server.Server(app);
// const serve = createServer(app);
// const io = socket(serve);
const io = new Server(serve);

app.use(express.urlencoded({ extended: true }));
const connection_url =
  "mongodb+srv://admin1:XxvqZUvGf8LKYJCR@cluster0.vfqse.mongodb.net/design_lab?retryWrites=true&w=majority";

mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database Connected");
  }
);

app.use("/api/users/mentee", menteeRouter);
app.use("/api/users/mentor", mentorRouter);
app.use("/api/users/session", sessionRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
// room joining api
app.get("/join", (req, res) => {
  res.send({ link: uuidV4() });
});
app.get("/orders", async (req,res)=>{
  var instance = new Razorpay({ key_id: 'rzp_test_N4U00sH9WvgsG6', key_secret: 'nNYc779EEX4pZLKjcp42nHXn' })
var sessiondetails = await sessions.findOne({_id: req.query.id})
console.log(sessiondetails);
var options = {
  amount: sessiondetails.Price * 100,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};
instance.orders.create(options, function(err, order) {
  res.json(order);
});
})
app.get("/getsessions2", async(req,res)=> {
  var id2=JSON.parse(id);
 var lol= await sessions.find({Organizers : req.query.id2._id});
  res.json(lol);
} )

app.post("/success", async(req,res)=> {
  
  var id3 = JSON.parse(req.query.id);
  console.log(id3._id);
  console.log("session id" + req.query.id2);
  res.send ("payment success");
  await sessions.updateOne({_id:req.query.id2},{ $push: { Participants: id3._id }})
})

io.on("connection", (socket) => {
  console.log("socket established");
  socket.on("join-room", (userData) => {
    const { roomID, userID } = userData;
    socket.join(roomID);
    socket.to(roomID).broadcast.emit("new-user-connect", userData);
    socket.on("disconnect", () => {
      socket.to(roomID).broadcast.emit("user-disconnected", userID);
    });
  });
});
const port = process.env.PORT || 5000;
serve
  .listen(port, () => {
    console.log("Running");
  })
  .on("error", (e) => {
    console.error(e);
  });

// httpServer.listen(port, () => {
//   console.log(`Serve at http://localhost:${port}`);
// });
