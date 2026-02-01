import Hero from './../components/sections/hero/Hero';
import { Service } from './../components/sections/ourService/Service';
import './globals.css';
import { Socials } from './../components/ui/socials/Socials';
import { AboutUs } from './../components/sections/aboutUs/AboutUs';
import { Advantages } from './../components/sections/advantages/Advantages';

export default function Home() {
  return (
    <div className='page'>
      <Hero />
      <Socials />
      <Service />
      <AboutUs />
      <Advantages />
    </div>
  );
}
