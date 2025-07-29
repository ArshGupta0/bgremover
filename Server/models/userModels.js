import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId : { type: String, requied:true, unique: true},
    email : { type: String, requied:true, unique: true},
    photo : { type: String, requied:true},
    firstName : { type: String},
    lastName : { type: String},
    creditBalance: {type: Number, default:5}
})
const userModel = mongoose.models.user || mongoose.model("user",userSchema)

export default userModel;