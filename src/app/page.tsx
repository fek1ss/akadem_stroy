import Hero from './../components/sections/hero/Hero';
import { Service } from './../components/sections/ourService/Service';
import './globals.css';
import { Socials } from './../components/ui/socials/Socials';
import { AboutUs } from './../components/sections/aboutUs/AboutUs';
import { Advantages } from './../components/sections/advantages/Advantages';
import { Projects } from './../components/sections/projects/Projects';
import { CertificatesSection } from './../components/sections/certificates/CertificatesSection';
import { PartnersSection } from './../components/sections/partnersSection/PartnersSection';
import { Footer } from './../components/layout/Footer/Footer';

export default function Home() {
  return (
    <div className='page'>
      <Hero />
      <Socials />
      <Service />
      <AboutUs />
      <Advantages />
      <Projects />
      <CertificatesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
