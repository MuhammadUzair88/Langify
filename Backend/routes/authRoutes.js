
const express=require("express");
const { SignUp, Login, Onboard } = require("../controllers/Auth");
const protectedRoutes = require("../middlewares/ProtectedRoutes");

const router=express.Router();

router.post('/signup',SignUp);
router.post('/login',Login);

router.post('/onboarding',protectedRoutes,Onboard)


module.exports=router;

