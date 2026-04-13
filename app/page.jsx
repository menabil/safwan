import About from "@/layouts/About";
import Banner from "@/layouts/Banner";
import Contact from "@/layouts/Contact";
import Portfolio from "@/layouts/Portfolio";
import Project from "@/layouts/Project";
import Service from "@/layouts/Service";
import Testimonial from "@/layouts/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Project />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}
