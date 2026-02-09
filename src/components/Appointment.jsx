import { useState } from "react"

export default function Appointment() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `Appointment Request:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Message: ${message}`

    window.open(`https://wa.me/917350075545?text=${text}`, "_blank")
  }

  return (
    <section className="appointment">
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

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Book Appointment</button>
      </form>
    </section>
  )
}
