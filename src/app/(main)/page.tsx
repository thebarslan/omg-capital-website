import Image from "next/image";
import Hero from "../components/page_components/main/hero";
import Container from "../components/common/container";
import About from "../components/page_components/main/about";

export default function Home() {
   return (
      <main className="">
         <Hero />
         <About />
      </main>
   );
}
