import mongoose from "mongoose";
import { app } from "./app.js";

let server;
const port = 5000

const main = async()=>{
  try {
    await mongoose.connect("mongodb://localhost:27017/DoctorWebsite")
    
    console.log("connected")
    server = app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
    
  } catch (error) {
    console.log(error)
  }
}


main()