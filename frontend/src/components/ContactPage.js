import React, { useState } from "react";
import Navbar from "./Navbar";
import p1 from "../asset/Contact2.jpg";
import FormInput from "./FormInput";
import "./ContactPage.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ContactPage = () => {
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "FirstName",
      type: "text",
      //   placeholder: "First Name",
      label: "First Name:",
    },
    {
      id: 2,
      name: "LastName",
      type: "text",
      //   placeholder: "Last Name",
      label: "Last Name:",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      //   placeholder: "E-mail",
      label: "E-mail:",
    },
    {
      id: 4,
      name: "phone",
      type: "tel",
      //   placeholder: "Phone",
      label: "Phone:",
    },
    {
      id: 5,
      name: "message",
      type: "textarea",
      rows: 5,
      clos: 30,
      //   placeholder: "message",
      label: "Message:",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // // to print out the form data
    // console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="contact-container">
        <div className="left">
          <div>
            <h1 className="contact-text">
              HAVE A PROJECT TO DISCUSS, GEI IN TOUCH
            </h1>
          </div>
          <img className="contact-pic" src={p1} alt="P1" />
        </div>

        <div className="right">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                className="form"
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              ></FormInput>
            ))}
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ top: "10px" }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
