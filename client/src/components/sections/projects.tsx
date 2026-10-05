import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Plane, ShieldCheck, BarChart3, LineChart, Sparkles, Wind, Workflow, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectSkylogger from "@/assets/project-skylogger.png";
import projectVault from "@/assets/project-vault.png";
import projectScentcast from "@/assets/project-scentcast.png";
import projectCloud from "@/assets/project-cloud.png";
import projectData from "@/assets/project-data.png";
import projectApp from "@/assets/project-app.png";
import projectAgrilink from "@/assets/project-agrilink.jpg";

const projects = [
  {
    id: 1,
    title: "AgriLink: ServiceNow Scoped App",
    category: "ServiceNow / Full-Stack",
    description: "Lead on the RiseUp capstone: a farmer to buyer marketplace on the Now Platform. App Engine Studio, Flow Designer, Scripted REST, ACLs, and a server-side state machine for the order lifecycle.",
    image: projectAgrilink,
    tags: ["ServiceNow", "App Engine", "Flow Designer", "Scripted REST", "ACLs"],
    link: "https://github.com/Pordilz",
    demo: null,
    icon: <Workflow className="w-5 h-5" />
  },
  {
    id: 2,
    title: "The Vault: Compliant Cloud Archive",
    category: "DevOps / IaC",
    description: "WORM compliant document archive on AWS, fully provisioned with Terraform. S3 Object Lock, KMS encryption, least privilege IAM, and automated Glacier lifecycle policies for strict data governance.",
    image: projectVault,
    tags: ["Terraform", "AWS", "S3 Object Lock", "KMS", "IAM"],
    link: "https://github.com/Pordilz/The-vault",
    demo: null,
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: 3,
    title: "SkyLogger: Aviation Telemetry Pipeline",
    category: "Backend / Data",
    description: "Python microservices that ingest live flight data from the OpenSky Network into PostgreSQL and visualise it with Streamlit. Unit tests and GitHub Actions keep it green, Docker Compose keeps it portable.",
    image: projectSkylogger,
    tags: ["Docker", "Python", "PostgreSQL", "Streamlit", "GitHub Actions"],
    link: "https://github.com/Pordilz/skylogger-project",
    demo: null,
    icon: <Plane className="w-5 h-5" />
  },
  {
    id: 4,
    title: "The Ledger: AI Accounting Reasoner",
    category: "AI / Full-Stack",
    description: "Next.js 16 teaching ledger. Describe a transaction, get balanced journal entries, statement effects, IFRS notes, and SA tax treatment. Gemini via the Vercel AI SDK with Zod structured output.",
    image: projectCloud,
    tags: ["Next.js 16", "Gemini", "Vercel AI SDK", "Zod", "TypeScript"],
    link: "https://github.com/Pordilz/ifrs-ledger",
    demo: null,
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    id: 5,
    title: "VidMetrics: YouTube Intelligence",
    category: "Full-Stack",
    description: "Next.js dashboard that turns a YouTube channel URL into KPI cards, performance tables, engagement charts, and a publishing cadence heatmap. Deployed on Vercel.",
    image: projectData,
    tags: ["Next.js", "TypeScript", "Chart.js", "YouTube API", "Vercel"],
    link: "https://github.com/Pordilz/VidMetrics",
    demo: "https://vidmetrics-git-main-yahyas-projects-cbbf0863.vercel.app/",
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    id: 6,
    title: "Halaq: Shariah Equity Screener",
    category: "Full-Stack",
    description: "Screens JSE and global equities against Shariah rules. React + Vite client, Express API, Supabase backing, Yahoo Finance data, and Lemon Squeezy billing. Packaged for Android with Capacitor.",
    image: projectApp,
    tags: ["React", "Express", "Supabase", "Yahoo Finance", "Capacitor"],
    link: "https://github.com/Pordilz/Halaq",
    demo: null,
    icon: <LineChart className="w-5 h-5" />
  },
  {
    id: 7,
    title: "ScentCast: Smart Fragrance App",
    category: "Android",
    description: "Android assistant that recommends fragrances from your collection based on live local weather. Built with Kotlin, MVVM, Room, and Retrofit, clean architecture end to end.",
    image: projectScentcast,
    tags: ["Kotlin", "MVVM", "Room", "Retrofit"],
    link: "https://github.com/Pordilz/ScentCast",
    demo: null,
    icon: <Wind className="w-5 h-5" />
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
            Full stack, DevOps, data, AI, Android, and ServiceNow.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border-2 border-black shadow-hard-sm font-mono text-xs">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-bold">Based in Durban, SA. CSA certified Sep 2026. CAD in progress.</span>
          </div>
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-black hover:text-white border border-black shadow-md">
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                      <Button size="icon" className="rounded-full bg-white text-black hover:bg-black hover:text-white border border-black shadow-md">
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </a>
                  )}
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