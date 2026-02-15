import heroImage from "../assets/clinic.jpg"

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h1>Chougule Dental Clinic</h1>
        <p>Advanced Multispeciality Dental Care • Ashta</p>

        <div className="hero-buttons">
          <a href="tel:07350075545" className="btn primary">
            Call Now
          </a>

          <a
            href="https://wa.me/917350075545"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
