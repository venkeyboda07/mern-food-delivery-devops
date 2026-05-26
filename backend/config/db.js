import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://negiminakshi635_db_user:mJSWjQXS1cBmwOWC@cluster0.5krlbut.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
       console.log('DB connected') ;
    })
}
