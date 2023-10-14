import UserSchema from "../model/User.js";
// import nodemail from "nodemailer";

// when user submit the form, create new user
const Users = async (req, res) => {
  try {
    console.log(req.body);
    const { FirstName, LastName, email, phone, message } = req.body;

    const newUser = new UserSchema({
      FirstName,
      LastName,
      email,
      phone,
      message,
    });

    const saveduser = await newUser.save();

    //test account
    // const testAccount = await nodemail.createTestAccount();

    // let transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: "your@gmail.com", // Replace with your email address
    //     pass: "your-password", // Replace with your email password
    //   },
    // });

    // const info = {
    //   from: '"Fred Foo" <foo@example.com>', //sender
    //   to: "bar@example.com", //receiver
    //   subject: "Hello", //plain text body
    //   text: "hello world",
    // };

    // transporter
    //   .sendMail(info)
    //   .then(() => {
    //     return res.status(201).json({ msg: "You should receive a email" });
    //   })
    //   .catch((err) => {
    //     return res.status(500).json({ err });
    //   });

    res.status(200).json({
      message: "User created successfully",
      "Access-Control-Allow-Origin": "*",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// const Users = (req, res) => {
//   res.status(201).json("Signup successfully");
// };

export default Users;
