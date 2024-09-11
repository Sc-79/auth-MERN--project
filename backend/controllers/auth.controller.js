import bcrypt from "bcryptjs"
import { User } from "../models/user.model.js"

import  generateTokenAndSetCookies  from "../utils/generateTokenAndSetCookies.js"
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body); // Log to verify the request body is received

  try {
      // Check for missing or empty fields (after trimming whitespaces)
      if (!name || !email || !password) {
          return res.status(400).json({ message: "All fields are required" });
      }

      const userAlreadyExists = await User.findOne({ email });
      if (userAlreadyExists) {
          return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationToken = Math.floor(10000 + Math.random() * 90000); // Proper number calculation
      
      const user = await User.create({
          name,
          email,
          password: hashedPassword,
          verificationToken,
          verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000 // Ensure this is correctly defined
      });
      await user.save();
      generateTokenAndSetCookies(res, user._id);

      res.status(201).json({
          success: true,
          message: "User created successfully",
          user: {
              ...user._doc,
              password: null
          }
      });

  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

export const login = (req, res) => {
    res.send("login")
}

 export const logout = (req, res) => {
    res.send("logout")
}
  
