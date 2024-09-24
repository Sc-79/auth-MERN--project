import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from a .env file

// Use the Mailtrap token from environment variables
const TOKEN = process.env.MAILTRAP_TOKEN;

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN is not defined in environment variables");
}

// Initialize the Mailtrap client with the token
export const MailtrapClients = new MailtrapClient({
  token: TOKEN,
});

// Sender and recipient details
export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
export const recipients = [
  {
    email: "souravchongrey@gmail.com",
  },
];

// Function to send the email
export const sendTestEmail = async () => {
  try {
    const response = await MailtrapClients.send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    });
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Call the function to send email
sendTestEmail();
