
const express=require("express");
const { RecommendedUsers, getMyfriends, sendFriendRequest, acceptFriendRequest, getFriendRequests, OutGoingFriendRequests } = require("../controllers/User");
const protectedRoutes = require("../middlewares/ProtectedRoutes");

const router=express.Router();

//apply auth miidleware to all Routes

router.use(protectedRoutes);


router.get('/recommend',RecommendedUsers);
router.get('/friends',getMyfriends)
router.post('/send-friend-request/:id',sendFriendRequest);
router.post('/accept-request/:id',acceptFriendRequest);
router.get('/getrequest', getFriendRequests);
router.get('/outgoing', OutGoingFriendRequests);



module.exports=router;

