const User = require("../models/User");
const Friends = require("../models/Friends");

const RecommendedUsers=async (req,res)=>{

try{  
    const currentUserId=req.user.userId;
    const currentUser=await User.findById(currentUserId);

    if(!currentUser){
        return res.status(404).json({message:"User not found"});
    }
const recommendedUsers = await User.find({
  _id: { $ne: currentUserId, $nin: currentUser.friends },
  isOnboarded: true,
});
res.status(200).json({
    recommendedUsers
})
}
catch(error){
    console.log("Error in getting recommended users", error);
    res.status(500).json({ message: "Internal server error" });
}
}

const getMyfriends=async(req,res)=>{
    try{
        const userId=req.user.userId;

        const userFriends=await User.findById(userId).populate("friends")
        if(!userFriends){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({
            friends:userFriends.friends
        });

    } 
    catch(error){
        console.log("Error in getting user friends", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Send friends request

const sendFriendRequest=async(req,res)=>{
    try{
        const myId=req.user.userId;
        const {id:recipientId}=req.params;

//cant send the request to myself
        if(myId===recipientId){
            return res.status(400).json({message:"You cannot send friend request to yourself"});
        }
        //check if the recipient exists
        const recipient=await User.findById(recipientId);
        if(!recipient){
            return res.status(404).json({message:"Recipient not found"});
        }
        //check if recipient is already a friend
        const isAlreadyFriend=recipient.friends.includes(myId);
        if(isAlreadyFriend){
            return res.status(400).json({message:"You are already friends with this user"});
        }
        // check if the request is already sent
 const existingRequest = await Friends.findOne({
  $or: [
    { sender: myId, recipient: recipientId },
    { sender: recipientId, recipient: myId }
  ]
});

     if(existingRequest){
        return res.status(400).json({message:"Friend request already sent"});
     }

     //create a new friend request

     const newFriendRequest = await Friends.create({
        sender: myId,
        recipient: recipientId,
        status: "pending"
     });
        res.status(200).json({
            message:"Friend request sent successfully",
            friendRequest:newFriendRequest
        });


    }
    catch(error){
        console.log("Error in sending friend request", error);
        res.status(500).json({ message: "Internal server error" });
}
}


const acceptFriendRequest=async(req,res)=>{
    try{

    const myId=req.user.userId;
    const {id:senderId}=req.params;

    //check if the sender exist

    const senderExist=await User.findById(senderId);
    if(!senderExist){
        return res.status(400).json({message:"The sender Not even Exist"});
    }
    //update the status
   
    const friendRequest=await Friends.findOneAndUpdate(
        {sender:senderId,recipient:myId,status:"pending"},
        {status:"accepted"},
        {new:true,upsert:true}
    )

    if(friendRequest.status==="accepted"){
        return res.status(400).json({message:"Friend request already accepted"});
    }

    if(!friendRequest){
        return res.status(400).json({message:"Friend request not found or already accepted"});
    }

    //add the friend

    const updatesender=await User.findByIdAndUpdate(senderId,{
        $push:{friends:myId}
    })
    const updateReceiver=await User.findByIdAndUpdate(myId,{
        $push:{friends:senderId}
    })
    res.status(200).json({
        message:"Friend request accepted successfully",
        friendRequest:friendRequest
    });
    }
    catch(error){
        console.log("Error in accepting friend request", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

//Get Friend Requests

const getFriendRequests=async(req,res)=>{
    try{
        const userId=req.user.userId;
        const incomingRequests= await Friends.find({
            recipient:userId,
            status:"pending"
        }).populate("sender", "fullName profilePic nativeLanguage learningLanguage");

        if(!incomingRequests){
            return res.status(404).json({message:"No friend requests found"});

        }
        const acceptedRequests=await Friends.find({
            sender:userId,
            status:"accepted"
        }).populate("recipient", "fullName profilePic");

        res.status(200).json({
            incomingRequests,
            acceptedRequests
        });


    }
    catch(error){
        console.log("Error in getting friend requests", error);
        res.status(500).json({ message: "Internal server error" });
    }

}


//outgoing friend requests

const OutGoingFriendRequests=async(req,res)=>{

      try {
    const outgoingRequests = await FriendRequest.find({
      sender: req.user.id,
      status: "pending",
    }).populate("recipient", "fullName profilePic nativeLanguage learningLanguage");

    res.status(200).json(outgoingRequests);
  } catch (error) {
    console.log("Error in getOutgoingFriendReqs controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}



module.exports={RecommendedUsers,getMyfriends,sendFriendRequest,acceptFriendRequest,getFriendRequests,OutGoingFriendRequests};