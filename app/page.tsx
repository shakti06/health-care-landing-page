import Article from "@/components/Articel";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import HealthProvider from "@/components/HealthProvider";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import UserFeedBack from "@/components/UserFeedBack";

export default function Home() {
  return (
    <>
      <Hero/>
      <Service/>
      <HealthProvider/>
      <Download/>
      <Article/>
      <Footer/>
    </>
  )
}
