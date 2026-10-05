import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Software Engineering",
    skills: ["Python", "TypeScript", "Java", "Kotlin", "SQL", "React", "Next.js", "Node.js", "Android", "REST APIs"],
    color: "bg-primary/15",
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Terraform", "Docker", "GitHub Actions", "CI/CD", "Vercel"],
    color: "bg-red-100",
  },
  {
    title: "Data Engineering",
    skills: ["PostgreSQL", "Schema design", "Supabase", "Drizzle ORM", "API ingestion", "Streamlit"],
    color: "bg-blue-100",
  },
  {
    title: "AI & LLM Engineering",
    skills: ["Vercel AI SDK", "Google Gemini", "Zod structured output", "Prompt engineering", "AI code evaluation"],
    color: "bg-yellow-100",
  },
  {
    title: "ServiceNow",
    skills: ["CSA (certified)", "CAD (in progress)", "App Engine Studio", "Flow Designer", "Scripted REST", "ACLs", "ATF", "HRSD"],
    color: "bg-primary/15",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white border-t-2 border-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-5xl font-heading font-bold mb-6">
            Technical <span className="text-primary underline decoration-4 underline-offset-4">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Full stack, DevOps, data, and AI. ServiceNow as a certified specialisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className={`p-4 border-2 border-black shadow-hard mb-4 ${category.color}`}>
                <h3 className="font-heading font-bold text-xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, rotate: skillIdx % 2 === 0 ? 1 : -1 }}
                    className="px-3 py-1.5 bg-white border-2 border-black shadow-hard-sm text-sm font-bold hover:shadow-hard hover:border-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}