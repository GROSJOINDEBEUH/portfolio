import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pt-16">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
