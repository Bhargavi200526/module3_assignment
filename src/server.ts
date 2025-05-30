import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

//load the variables from the .env file 
dotenv.config()

//creating the app to use the requests and responses 
const app=express();

//tells the express to automatically parse the json file data incoming requests like from post 

app.use(express.json());

//to define base route to handle the routes in the userRoutes 
app.use('/api',userRoutes);


// ✅ Accessing the Mongo URI from the .env file


mongoose.connect(process.env.MONGO_URI as string)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });