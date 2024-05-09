import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref:'PostSeller' },
    userEmail: {type:String},
    userName: {type:String},
    address: {type:String},
    amount:{type:Number},
    quantity:{type:Number}
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;