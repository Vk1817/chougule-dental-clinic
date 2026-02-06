export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <div className="contact-details">
          <p><strong>Chougule Dental Clinic</strong></p>
          <p>
            First Floor, above DCC Bank (Jilha Madhyawarti Bank),<br />
            near Chandu Wadapav, Amruta Awati,<br />
            Ashta, Sangli, Maharashtra – 416301
          </p>
          <p>
            📞 <a href="tel:07350075545">073500 75545</a>
          </p>
        </div>

        <div className="contact-map">
          <iframe
            title="Chougule Dental Clinic Location"
            src="https://maps.app.goo.gl/4bQy6cNTwMo6y9Ar5&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
