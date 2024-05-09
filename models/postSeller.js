import mongoose from "mongoose";

const postSellerSchema = new mongoose.Schema(
  {
    productName: { type: String },
    brandName: {type:String},
    deliveryTime: {type:String},
    deliveryFee: {type:String},
    returnPolicy: {type:String},
    productPrice: {type:Number},
    productWarrenty: {type:String},
    producImg: {type:Array},
    model: {type:String},
    features: {type:Array},
    description: {type:String},
    authorEmail: {type:String},
    authorImage: {type:String},
    authorName: {type:String},
    feedback: {type:String},
    approved:{type:Boolean},
    rating:{type:Number},
    buyer:{type:Number}
  },
  {
    timestamps: true,
  }
);

const PostSeller = mongoose.models.PostSeller || mongoose.model("PostSeller", postSellerSchema);
export default PostSeller;
