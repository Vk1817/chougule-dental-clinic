import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import Doctors from "./components/Doctors"
import Testimonials from "./components/Testimonials"
import GoogleReviews from "./components/GoogleReviews"
import Contact from "./components/Contact"
import FloatingButtons from "./components/FloatingButtons"
import Navbar from "./components/Navbar"
import Appointment from "./components/Appointment"
import Footer from "./components/Footer"

export default function App() {
  return (
   <>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <WhyChooseUs />
  <Doctors />
  <Testimonials />
   <GoogleReviews />
  <Appointment />
  <Contact />
  <FloatingButtons />
  <Footer />
</>

  )
}
