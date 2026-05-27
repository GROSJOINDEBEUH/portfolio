import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { WhyMe } from '@/components/sections/why-me';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pt-16">
      <Hero />
      <Services />
      <Projects />
      <About />
      <WhyMe />
      <Contact />
    </main>
  );
}
