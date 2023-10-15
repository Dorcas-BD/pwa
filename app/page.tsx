import About from "@/pages/about/page";
import Contacts from "@/pages/contacts/page";
import Footer from "@/pages/footer/page";
import Hero from "@/pages/hero/page";
import NavBar from "@/pages/navbar/page";
import Projects from "@/pages/projects/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
