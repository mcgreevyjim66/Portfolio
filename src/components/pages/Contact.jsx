import React, { useState } from "react";

import { validateEmail } from "../utils/helpers";

const styles = {
  h2: {
    textAlign: "center",
  },
  form: {
    textAlign: "center",
  },
  email: {
    textAlign: "center",
    color: "#0000FF",
  },
  input: {
    margin: "0.5rem",
  },
  inputa: {
    height: "4rem",
  },
};

function Form() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [valerr, setValErr] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (event) => {
    console.log("handleBlue called event:" + event)
 
    const { name, value } = event.target;
    if (!value)  {

      setSuccessMessage(`***** ${name} is required ****`)
    } else {
      setSuccessMessage("")
    }
    return;

};

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is Invalid");
      return;
    }

    if (!Name) {
      alert("Name is Required");
      return;
    }

    if (!message) {
      alert("Message is Required");
      return;
    }

    if (email || Name || message) {
      setSuccessMessage("Form Submitted Successfully");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
    setValErr("") 
    
  };

  return (
    <div>
      <h2 style={styles.h2}>Contact</h2>
      <div style={styles.email}>
        <a href="mailto:ahergert24@hotmail.com">mcgreevyjim66@yahoo.com</a>
      </div>
      <form action="mailto:mcgreevyjim66@yahoo.com" method= "post" encType="text/plain" style={styles.form} className="form">
        <div style={styles.input}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlur}

            type="email"
            placeholder="email"
            required
          />
          <p> {valerr}</p>
        </div>
        <div style={styles.input}>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            onBlur={handleBlur}
           
            type="text"
            placeholder="name"
            required
          />
          <p> {valerr}</p>
        </div>
        <div style={styles.input}>
          <input
            style={styles.inputa}
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="message"
            placeholder="message"
            required
          />
          <p> {valerr}</p>
        </div>
        <div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
      {successMessage && (
        <div style={styles.form}>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
