const mongoose=require("mongoose");
const friendsSchema=new mongoose.Schema({
    
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        enum:["pending","accepted"],
        default:"pending"
    },
},
{Timestamps:true},
);

const Friends=mongoose.model("Friends",friendsSchema);
module.exports=Friends;