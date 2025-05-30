const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv')

dotenv.config();

const PORT=process.env.PORT || 5000;

//Middleware

app.use(cors());

app.use(express.json());

//Routes
const authRoutes=require('./routes/authRoutes');
const UserRoutes=require('./routes/UserRoutes');


app.use('/api/auth',authRoutes);
app.use('/api/users',UserRoutes);


//start Server

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//connect to MongoDB

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

