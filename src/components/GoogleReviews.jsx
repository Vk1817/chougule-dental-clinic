export default function GoogleReviews() {
  return (
    <section className="google-rating">
      <h2>⭐ 5.0 Rating on Google</h2>
      <p className="rating-subtitle">
        Trusted by patients in Ashta & nearby areas
      </p>

      <div className="rating-cards">

        <div className="rating-card">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>
            “Dr. Prangha Chougule and Dr. Rohit Chougule both are extremely
            professional, knowledgeable and friendly. They make patients very
            comfortable. Staff is polite, professional and follow-ups are done
            on time. I highly recommend Chougule Multispeciality Dental Clinic,
            Ashta.”
          </p>
          <strong>– Santosh Kumbhar</strong>
        </div>

        <div className="rating-card">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>
            “Dr. treatment is very good. My experience for root canal and dental
            cap treatment was excellent. Talking and treatment experience was
            very nice. I am fully satisfied. Thank you so much sir.”
          </p>
          <strong>– Abhishek Kole</strong>
        </div>

        <div className="rating-card">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>
            “Doctors advise is very proper and they explain everything very
            clearly. Madam is a very good doctor. Highly recommended.”
          </p>
          <strong>– Sonali Salokhe</strong>
        </div>

        <div className="rating-card">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p>
            “Very good treatment. Dr. Rohit and Dr. Prangha explained everything
            very clearly. Hospital staff is kind and clinic is very clean and
            beautiful.”
          </p>
          <strong>– Ashwini Lavate</strong>
        </div>

      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Chougule+Multispeciality+Dental+Clinic+Ashta"
        target="_blank"
        rel="noopener noreferrer"
        className="google-review-btn"
      >
        View all reviews on Google
      </a>
    </section>
  )
}
