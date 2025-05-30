const  JWT  = require("jsonwebtoken");
const   User  = require("../models/User");
const bcrypt=require('bcryptjs');
const { upsertStreamUser } = require("../lib/stream");

const SignUp=async(req,res)=>{

   
    try{
     const {fullName,email,password}=req.body;

      if(!fullName || !email || !password){
        return res.status(404).json({message:"Please fill all the fields"});
      }
      const newUser=await User.findOne({email:email});
       if(newUser){
        return res.status(400).json({message:"User Already Exists"});
       }

       const hashedPassword=await bcrypt.hash(password,10);
    
       const idx=Math.floor(Math.random()*100)+1;
       const randomAvatar=`https://avatar.iran.liara.run/public/${idx}.png`;


       const user=await User.create({
        fullName,
        email,
        password:hashedPassword,
        profilePic:randomAvatar,
       })

   // Create User In Stream As well

try{
       await upsertStreamUser({
        id:user._id.toString(),
        name:user.fullName,
        image:user.profilePic || '',
   });
   console.log(`User created in stream successfully for ${user.fullName}`);

}
catch(error){
console.log("Error in creating stream user",error);

}


       const token=await JWT.sign({userId:user._id},process.env.JWT_SECRET,{
        expiresIn:"7d"
       })
     

     res.status(201).json({
        message:"User Created Successfully",
        user:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
            token:token
        }
     })
    }
  catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


const Login=async(req,res)=>{
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = await JWT.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                profilePic: user.profilePic,
                token: token
            }
        });
    } catch (error) {
        console.log("Error in login controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const Onboard=async(req,res)=>{

  
    try{
          const userId = req.user.userId;
    const { fullName, bio, nativeLanguage, learningLanguage, location } = req.body;
    if (!fullName || !bio || !nativeLanguage || !learningLanguage || !location) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    const user=await User.findByIdAndUpdate(
        userId,{

            fullName,
            bio,
            nativeLanguage,
            learningLanguage,
            location,
            isOnboarded:true,
            
        },
        {
            new: true, 
        }

    )
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    // Update Stream User
    try {
        await upsertStreamUser({
            id: user._id.toString(),
            name: user.fullName,
            image: user.profilePic || '',
        });
        console.log(`User updated in stream successfully for ${user.fullName}`);
    } catch (error) {
        console.log("Error in updating stream user", error);
    }
    res.status(200).json({
        message: "User onboarded successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
            bio: user.bio,
            nativeLanguage: user.nativeLanguage,
            learningLanguage: user.learningLanguage,
            location: user.location,
        }

    });
}catch (error) {
    console.log("Error in onboarding controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


module.exports={SignUp,Login,Onboard};