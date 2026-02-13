import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Appointment() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    }

    emailjs
      .send(
        "service_qrumx55",        // Service ID
        "template_908dksu",       // Template ID
        templateParams,
        "2mDLcruOZfH0K_PBA"        // Public Key
      )
      .then(
        () => {
          setStatus("✅ Appointment request sent successfully!")
          setName("")
          setPhone("")
          setEmail("")
          setMessage("")
        },
        () => {
          setStatus("❌ Failed to send appointment. Please try again.")
        }
      )
  }

  return (
    <section className="appointment" id="appointment">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Book Appointment</button>

        {status && <p style={{ marginTop: "15px" }}>{status}</p>}
      </form>
    </section>
  )
}
