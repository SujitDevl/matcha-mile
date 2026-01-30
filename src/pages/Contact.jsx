import React, { useState } from "react";
import Container from "../components/layout/Container";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  return (
    <Container>
      <h1 className="text-3xl font-bold py-10">Contact Us</h1>
      <p className="text-stone-600">
        We'd love to hear from you. Reach out anytime.
      </p>
    </Container>
  );
}

export default Contact;
