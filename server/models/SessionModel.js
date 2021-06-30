import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);
const sessions = mongoose.model("sessions", sessionSchema);
export default sessions;
