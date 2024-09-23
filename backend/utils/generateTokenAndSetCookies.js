import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (res, userId) => {
  try {
    const jwtSecret = process.env.JWT_SECRET;
    
    // Check if JWT_SECRET is defined
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    // Create the JWT token
    const token = jwt.sign({ userId }, jwtSecret, { expiresIn: "7d" });

    // Set the token in an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Prevents CSRF attacks by restricting cross-site requests
      maxAge: 7 * 24 * 60 * 60 * 1000, // Token valid for 7 days
    });

    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Failed to generate authentication token");
  }
};

export default generateTokenAndSetCookies;





