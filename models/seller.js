import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
  {
    authorEmail: { type: String, required: true },
    authorName: {type:String, required:true},
    companyName: {type:String, required:true},
    address: {type:String, required:true},
    numbers: {type:Number, required:true},
    picture: {type:String, required:true}
  },
  {
    timestamps: true,
  }
);

const Seller = mongoose.models.Seller || mongoose.model("Seller", sellerSchema);
export default Seller;
