import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Name is Required']
  },

  email:{
    type:String,
    required:[true,'Email Is Required'],
    trim:true,
    lowercase:true,
  },

  phone:{
    type:String,
    unique:true,
  },

  passwordHash:{
    type:String,
    required:true,
  },


  profilePicture:{
    type:String,
  },

  status:{
    type:Number,
    default:"ACTIVE",
    enum: ["ACTIVE", "BLOCKED", "DELETED"]

  },

  createdAt:{
    type:Date,
    default:Date.now
  },

  updatedAt:{
    type:Date,
    default:Date.now
  },

  lastSeenAt:{
    type:Date,
  }
})

const User = mongoose.model('User',UserSchema);
export default User;