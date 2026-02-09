export default function GoogleReviews() {
  return (
    <section className="google-reviews">
      <h2>What Our Patients Say</h2>

      <div className="google-review-card">
        <p className="rating">⭐⭐⭐⭐⭐</p>
        <p>
          "Very professional doctors. Clean clinic and painless treatment.
          Highly recommended!"
        </p>
        <strong>– Google Review</strong>
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Chougule+Dental+Clinic+Ashta+Sangli"
        target="_blank"
        rel="noopener noreferrer"
        className="review-btn"
      >
        View More Reviews on Google
      </a>
    </section>
  )
}
