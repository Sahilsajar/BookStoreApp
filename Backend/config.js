export const PORT = 5555;
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

export const mongoDBURL = process.env.MONGODB_URL;
