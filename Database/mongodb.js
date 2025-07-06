import mongoose, { Error } from "mongoose";

import { DB_URI } from "../config/env.js";

if(!DB_URI){
  throw new Error("provide Db url for connecting to the database in env")
}

const connectToDatabase = async () => {
  try {
    console.log("here at await");
    await mongoose.connect(DB_URI);
    console.log("connected to the database");
  } catch (error) {
    console.log("coudn't connect to the database try again")
    process.exit(1);
  }
}

export default connectToDatabase;