import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground md:pl-64 transition-all duration-300">
      <Navigation />
      
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}