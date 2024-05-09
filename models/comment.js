const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref:'PostSeller' },
    userEmail: {type:String},
    rating:{type:Number},
    comment:{type:String}
},
{
    timestamps:true
})
const Comment = mongoose.models.Comment || mongoose.model("Comment",commentSchema);
export default Comment;