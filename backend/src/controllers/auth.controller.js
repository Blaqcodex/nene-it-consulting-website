import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { comparePassword } from "../utils/password.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Compare password
    const validPassword = await comparePassword(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: process.env.JWT_EXPIRES_IN,
  }
);

res.status(200).json({
  success: true,
  message: "Login successful.",
  token,
});

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};