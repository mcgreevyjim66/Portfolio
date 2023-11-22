import React, { useState } from "react"; // Importing React and the useState hook from the React library.

import { validateEmail } from "../utils/helpers"; // Importing a custom function to validate email addresses.

// Defining CSS styles as a JavaScript object.
const styles = {
  h2: {
    textAlign: "center", // Center-align text in <h2> elements.
  },
  form: {
    textAlign: "center", // Center-align text in form elements.
  },
  email: {
    textAlign: "center", // Center-align text in email elements.
    color: "#0000FF", // Set text color to blue.
  },
  input: {
    margin: "0.5rem", // Set margin around input elements.
  },
  inputa: {
    height: "4rem", // Set a specific height for some input elements.
  },
};

// Defining a functional component named 'Form'.
function Form() {
  // State variables for the form.
  const [email, setEmail] = useState(""); // State for the email input field.
  const [Name, setName] = useState(""); // State for the name input field.
  const [message, setMessage] = useState(""); // State for the message input field.
  const [successMessage, setSuccessMessage] = useState(""); // State for displaying the success message.
  const [valerr, setValErr] = useState(""); // State for validation error messages.

  // Function to handle changes in input fields.
  const handleInputChange = (e) => {
    const { target } = e; // Destructuring to get the event target.
    const inputType = target.name; // Identifying the input field's name.
    const inputValue = target.value; // Getting the current value of the input field.

    // Updating state based on the input field.
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Function to handle onBlur event for form validation.
  const handleBlur = (event) => {
    const { name, value } = event.target; // Destructuring to get name and value from the event target.
    // Checking if the input field is empty and setting the appropriate message.
    if (!value)  {
      setSuccessMessage(`***** ${name} is required ****`)
    } else {
      setSuccessMessage("")
    }
  };

  // Function to handle form submission.
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior.

    // Validating email, name, and message fields.
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

    // Checking if any of the fields are filled and setting success message.
    if (email || Name || message) {
      setSuccessMessage("Form Submitted Successfully");
      return;
    }

    // Resetting the form fields.
    setName("");
    setMessage("");
    setEmail("");
    setValErr("") 
  };

  // JSX for rendering the form component.
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



