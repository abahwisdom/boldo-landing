import Benefits from "./sections/Benefits";
import Blog from "./sections/Blog";
import Connect from "./sections/Connect";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar"
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import Testimonials from "./sections/Testimonials";

export default function Landing() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <Hero/>
        <Services/>
        <Benefits/>
        <Testimonials/>
        <Connect/>
        <Blog/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}