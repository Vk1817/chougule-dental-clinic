export default function FloatingButtons() {
  return (
    <>
      {/* Call Button */}
      <a
        href="tel:07350075545"
        className="floating-btn call-btn"
        aria-label="Call Chougule Dental Clinic"
      >
        📞
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917350075545"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="WhatsApp Chougule Dental Clinic"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  )
}
