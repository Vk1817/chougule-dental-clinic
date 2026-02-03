export default function Doctors() {
  return (
    <section className="doctors">
      <h2>Our Doctors</h2>

      <div className="doctors-grid">
        <div className="doctor-card">
          <img
            src="https://thumbs.dreamstime.com/z/happy-male-dentist-clinic-portrait-wearing-lab-coat-sitting-36113336.jpg"
            alt="Dr. Rohit Chougule"
          />
          <h3>Dr. Rohit Chougule</h3>
          <p>Dental Surgeon</p>
        </div>

        <div className="doctor-card">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.Kiegu9ZM9yG8_NaaRDaKqAHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Dr. Prangha Chougule"
          />
          <h3>Dr. Prangha Chougule</h3>
          <p>Dental Surgeon</p>
        </div>
      </div>
    </section>
  )
}
