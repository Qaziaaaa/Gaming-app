import Hero from '../sections/Hero';
import About from '../sections/About';
import Features from '../sections/Features';
import GamesShowcase from '../sections/GamesShowcase';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Features />
      <GamesShowcase />
    </div>
  );
}
