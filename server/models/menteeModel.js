import mongoose from "mongoose";

const menteeSchema = new mongoose.Schema(
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
    mobilenumber: { type: String, required: true },
    instituteName: { type: String, required: false },
    enrollmentNumber: { type: String, required: false },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Mentee = mongoose.model("Mentee", menteeSchema);
export default Mentee;
