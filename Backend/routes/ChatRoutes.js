
const express=require("express");
const protectedRoutes = require("../middlewares/ProtectedRoutes");
const getStreamToken = require("../controllers/Chat");

const router=express.Router();

router.get('/token',protectedRoutes,getStreamToken)

module.exports=router;

