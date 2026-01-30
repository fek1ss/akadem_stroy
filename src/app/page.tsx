import { CardService } from '@/components/ui/cardService/СardService';
import Hero from './../components/sections/hero/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <CardService title={'dsfs'} description={'nsjfadf'} img={"/images/logo.png"} />
    </div>
  );
}
