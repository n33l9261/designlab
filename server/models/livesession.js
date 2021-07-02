import mongoose from "mongoose";


const liveSchema = new mongoose.Schema(
  {
    sessionName: { type: String, required: true },
    DateInfo: { type: String, required: true },
    Price: { type: Number, required: true },
    Referral: { type: Boolean, required: true },
    Test: { type: Boolean, required: true },
    Interview: { type: Boolean, required: true },
    multipleOrganizers: { type: Boolean, required: true },
    multipleStudents: { type: Boolean, required: true },
    Testlink: { type: String, required: false },
    Organizers: { type: [], required: true },
    Participants: { type: [], required: false },
    session_id: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
const livesessions = mongoose.model("livesession", liveSchema);
export default livesessions;
