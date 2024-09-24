import { MailtrapClients, sender } from "../mailtrap/mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailstemplates.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  const recipients = [
    {
      email,
    },
  ];

  try {
    const response = await MailtrapClients.send({
      from: sender,
      to: recipients,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationCode
      ),
      category: "Email Verification",
    });
    console.log("Email sent:   ", response);
  } catch (error) {
    console.error("Error sending email", error);
    throw new Error(`Error sending email:${error}`);
  }
};
