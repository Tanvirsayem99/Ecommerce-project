

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String
},{
    timestamps: true
}
);

const User = mongoose.models.user || mongoose.model("user",userSchema)
export default User;