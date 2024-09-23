import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import generateTokenAndSetCookies from "../utils/generateTokenAndSetCookies.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  
  // Log to verify the request body
  console.log("Request body:", req.body);

  try {
    // Trim the fields to avoid accidental spaces and check for missing values
    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password.trim(), 10);
    const verificationToken = Math.floor(10000 + Math.random() * 90000);

    const user = await User.create({
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
      verificationToken,
      verificationTokenExpireAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();
    generateTokenAndSetCookies(res, user._id);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined, // Hide password from the response
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const login = (req, res) => {
    res.send("login")
}

 export const logout = (req, res) => {
    res.send("logout")
}
  
