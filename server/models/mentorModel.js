import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
      sparse: true,
    },
    password: { type: String, required: true },
    mobilenumber: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    employeeIDNumber: { type: String, required: true },
    address: { type: String, required: true },
    // employeeIDimage: { type: String, required: true },
    // governmentIDimage: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    verificationstatus: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const Mentor = mongoose.model("Mentor", mentorSchema);
export default Mentor;
