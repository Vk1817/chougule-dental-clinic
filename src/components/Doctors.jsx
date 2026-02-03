export default function Doctors() {
  return (
    <section className="doctors">
      <h2>Our Doctors</h2>

      <div className="doctors-grid">
        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1606813909355-d65c3b9fd5ab"
            alt="Dr. Rohit Chougule"
          />
          <h3>Dr. Rohit Chougule</h3>
          <p>Dental Surgeon</p>
        </div>

        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f"
            alt="Dr. Prangha Chougule"
          />
          <h3>Dr. Prangha Chougule</h3>
          <p>Dental Surgeon</p>
        </div>
      </div>
    </section>
  )
}
