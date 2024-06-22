import mongoose from "mongoose";

export const  connectDB = async () =>{
    const url = process.env.MONGO_URI
    await mongoose.connect(url).then(()=>console.log("DB Connected"));
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.