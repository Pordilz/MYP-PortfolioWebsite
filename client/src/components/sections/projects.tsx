import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Plane, Wind, ShieldCheck, Link as LinkIcon, Calculator, Database, Gamepad2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectSkylogger from "@/assets/project-skylogger.png";
import projectVault from "@/assets/project-vault.png";
import projectScentcast from "@/assets/project-scentcast.png";
import projectCloud from "@/assets/project-cloud.png";
import projectData from "@/assets/project-data.png";
import projectApp from "@/assets/project-app.png";

const projects = [
  {
    id: 1,
    title: "SkyLogger: Live Aviation Dashboard",
    category: "Cloud & Data",
    description: "A containerized aviation telemetry dashboard that ingests real-time flight data from OpenSky Network into PostgreSQL and visualizes it with Streamlit.",
    image: projectSkylogger,
    tags: ["Streamlit", "PostgreSQL", "Docker", "Python"],
    link: "https://github.com/Pordilz/skylogger-project",
    icon: <Plane className="w-5 h-5" />
  },
  {
    id: 2,
    title: "The Vault: Secure Cloud Archive",
    category: "Cloud Engineering",
    description: "Secure cloud storage solution for sensitive data. Built on AWS using Terraform, enforcing a WORM model to prevent data tampering.",
    image: projectVault,
    tags: ["Terraform", "AWS", "Security", "WORM"],
    link: "https://github.com/Pordilz/The-vault",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: 3,
    title: "ScentCast: Smart Fragrance App",
    category: "Android Dev",
    description: "Android app that recommends fragrances based on real-time weather data and personal digital libraries using a custom algorithm.",
    image: projectScentcast,
    tags: ["Android", "Kotlin", "Weather API", "Algorithm"],
    link: "https://github.com/Pordilz/ScentCast",
    icon: <Wind className="w-5 h-5" />
  },
  {
    id: 4,
    title: "LinkHub: Centralized Portfolio",
    category: "Web Dev",
    description: "A centralized platform for users to share their portfolio of links, simplifying social media and project showcasing.",
    image: projectCloud,
    tags: ["SvelteKit", "Firebase", "Web"],
    link: "https://github.com/Pordilz/LinkHub",
    icon: <LinkIcon className="w-5 h-5" />
  },
  {
    id: 5,
    title: "NumbleBot: Expression Finder",
    category: "Python Dev",
    description: "Python program that searches for equations using basic operations and parentheses to achieve a target answer from available numbers.",
    image: projectData,
    tags: ["Python", "Streamlit", "Algorithms"],
    link: "https://github.com/Pordilz/Numble-bot",
    icon: <Calculator className="w-5 h-5" />
  },
  {
    id: 6,
    title: "Pirate Platformer",
    category: "Game Dev",
    description: "Immersive 2D platformer game in a pirate-themed world with stunning graphics and smooth responsive controls.",
    image: projectApp,
    tags: ["Python", "Pygame", "2D Graphics"],
    link: "https://github.com/Pordilz/Pirate-Platformer",
    icon: <Gamepad2 className="w-5 h-5" />
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 inline-block relative">
            Featured Projects
            <span className="absolute -top-6 -right-8 text-secondary font-hand text-xl rotate-12">Latest Work!</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From secure cloud archives to interactive 2D games, here's a look at my engineering journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border-2 border-black shadow-hard hover:shadow-hard-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video border-b-2 border-black overflow-hidden bg-gray-100">
                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="secondary" className="border border-black rounded-none shadow-sm font-bold">
                    {project.category}
                  </Badge>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-black hover:text-white border border-black shadow-md">
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <Button size="icon" className="rounded-full bg-white text-black hover:bg-black hover:text-white border border-black shadow-md">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-gray-50 border border-black shadow-hard-sm">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-bold font-mono uppercase border border-black/20 bg-gray-50 text-gray-600 group-hover:border-black group-hover:text-black transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com/Pordilz" target="_blank" rel="noopener noreferrer">
            <Button variant="link" className="text-xl font-heading font-bold underline decoration-2 underline-offset-4 decoration-secondary hover:decoration-primary transition-all">
              Full Portfolio on GitHub <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}