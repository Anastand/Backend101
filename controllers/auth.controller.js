import mongoose from "mongoose";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession(); //session of mongoose transaction -> do atomic operation 
  try {
    //post req -> allow you to pass some data

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};
export const signIn = async (req, res, next) => {
  
};
export const signOut = async (req, res, next) => {
  
};