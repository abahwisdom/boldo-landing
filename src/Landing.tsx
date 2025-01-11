import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar"

export default function Landing() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <Hero/>
    </div>
  );
}