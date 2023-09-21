import UserSchema from "../model/User.js";
import { Mailchimp } from "@mailchimp/mailchimp_marketing";

const mailchimp = new Mailchimp(process.env.EMAILCHIMP);

// when user submit the form, create new user
export const Users = async (req, res) => {
  try {
    const { FirstName, LastName, email, phone, message } = req.body;

    const newUser = new UserSchema({
      FirstName,
      LastName,
      email,
      phone,
      message,
    });

    const saveduser = await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
