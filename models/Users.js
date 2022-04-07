import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: Number, required: true, default: 0 },
    userAccess: { type: String, required: true, default: "customer" },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);

export default Users;
