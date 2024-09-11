import jwt from "jsonwebtoken";


const generateTokenAndSetCookies = (res, userId) => {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Ensures secure cookies in production
            sameSite: "strict", // Strict cookie policy for better security
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days expiration
        });

        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Failed to generate authentication token");
    }
};





export default generateTokenAndSetCookies
