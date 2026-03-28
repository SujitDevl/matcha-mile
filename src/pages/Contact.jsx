import React from "react";
import { useState } from "react";
import Container from "../components/layout/Container";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (name === "" || email === "" || message === "") {
      setError("Please fill all the fields");
      setSuccess("");
      return;
    }

    // if valid
    setError("");
    setSuccess("Message sent successfully!");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // clear form
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-stone-600 mb-10">
          Have a question or feedback? We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-amber-800"
          >
            Send Message
          </button>
        </form>
      </Container>
    </section>
  );
}

export default Contact;
