import React, { useState } from "react";
import Navbar from "./Navbar";
import p1 from "../asset/Contact2.jpg";
import FormInput from "./FormInput";
import "./ContactPage.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target.form.value);
    // const data = new FormData(e.target.value);
    // // // to print out the form data
    // console.log(Object.fromEntries(data.entries()));
    // form data stored in values.

    // console.log(values);
    try {
      const savedUserResponse = await fetch(
        "http://localhost:3001/api/contact/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      ).then((response) => {
        if (response.status === 200) {
          //after send message to backend, and backend send back 200 status, we navigate page
          navigate("/");
        }
      });
    } catch (error) {
      console.log("Error sending data:", error);
      return;
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.value);
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
                // value={values[input.name]}
                value={values.name}
                onChange={onChange}
              ></FormInput>
            ))}
            <button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ top: "10px" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
