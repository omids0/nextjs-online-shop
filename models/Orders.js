import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  user: { type: Array, required: true },
  products: { type: Array, required: true },
  description: { type: String, required: true },
  confirmed: { type: String, required: true },
  sendToPost: { type: Boolean, required: true },
  inPost: { type: Boolean, required: true },
  deliverd: { type: Boolean, required: true },
  noteAccept: { type: Boolean, required: true },
  factorFinalPrice: { type: Number, required: true },
},{
      timestamps: true,
});

const Orders = mongoose.models.Orders || mongoose.model("Orders", ordersSchema);

export default Orders