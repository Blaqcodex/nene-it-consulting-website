import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/database.js";
import User from "../models/user.model.js";
import { hashPassword } from "../utils/password.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingUser = await User.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (existingUser) {
      console.log("✅ Admin user already exists.");
      process.exit();
    }

    const hashedPassword = await hashPassword(process.env.ADMIN_PASSWORD);

    await User.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "admin",
    });

    console.log("🎉 Admin user created successfully.");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();