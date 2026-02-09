import { useEffect, useState } from "react"

const reviews = [
  {
    name: "Santosh Kumbhar",
    date: "1 month ago",
    text:
      "Dr. Prangha Chougule and Dr. Rohit Chougule are extremely professional, knowledgeable and friendly. They make patients feel very comfortable. Staff is polite, professional and follow-ups are done on time. I highly recommend Chougule Multispeciality Dental Clinic, Ashta.",
  },
  {
    name: "Abhishek Kole",
    date: "2 months ago",
    text:
      "My experience for root canal and dental cap treatment was excellent. The treatment and conversation experience was very nice. I am fully satisfied with the results.",
  },
  {
    name: "Ashwini Thorat",
    date: "7 months ago",
    text:
      "I have done my root canal treatment here. I was scared initially, but both doctors made me feel comfortable during the whole process. Every appointment was on time and I am very happy with the results.",
  },
  {
    name: "Pradip Pakade",
    date: "7 months ago",
    text:
      "Very neat setup with modern equipment. Doctor is polite and ensures the patient is comfortable. Perfect treatment at reasonable cost. Highly professional and gentle approach.",
  },
  {
    name: "Chintamani Bapat",
    date: "1 year ago",
    text:
      "The dentist was highly skilled and explained every step clearly. I felt confident in the treatment plan. Compassion and technical expertise are clearly visible.",
  },
  {
    name: "Sakshi Shaha",
    date: "7 months ago",
    text:
      "Best dental clinic in Ashta. Doctors are very friendly and professional. Best dental experience I ever had.",
  }
]

export default function GoogleReviews() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="google-rating">
      <div className="google-badge">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
        />
        <span>⭐ 5.0 Rating on Google</span>
      </div>

      <h2>Most Trusted Dental Clinic in Ashta</h2>

      <div className="rating-carousel">
        <div className="rating-card">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p className="review-text">“{reviews[index].text}”</p>
          <strong>– {reviews[index].name}</strong>
          <p className="review-date">{reviews[index].date}</p>
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
