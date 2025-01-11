import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar"
import Services from "./sections/Services";

export default function Landing() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <Hero/>
        <Services/>
    </div>
  );
}