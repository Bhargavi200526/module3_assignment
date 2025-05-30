import mongoose from 'mongoose';

//creating the userschema with types 

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//creating the model here with the name user 
const User = mongoose.model('User', userSchema);

// for import in the another file 
export default User;
