import mongoose from "mongoose";
 
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"username already exist"]
    },
    password:{
        type:String,
        required:[true,"Passsword is required"],
        unique:[true,"Password already exist"]
    }
})



export default mongoose.model.Users||mongoose.model("User",userSchema);