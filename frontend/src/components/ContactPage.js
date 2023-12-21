import React, { useState } from "react";
import p1 from "../asset/Contact2.jpg";
import FormInput from "./FormInput";
import "./ContactPage.css";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Line from "./Line";

const ContactPage = (props) => {
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
          console.log(response.status);
          // setIsFormSubmitted(true);
          // props.onFormSubmitted(true);
          //after send message to backend, and backend send back 200 status, we navigate page
          navigate("/Confirm");
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
    <div id="contact">
      <Line />
      <p className="about-title">Contact Us</p>
      <div className="contact-container">
        <div className="left">
          <div className="contact-text">
            <h1>HAVE A PROJECT TO DISCUSS, GEI IN TOUCH</h1>
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
