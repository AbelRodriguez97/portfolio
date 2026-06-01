import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}