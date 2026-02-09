import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend & Languages",
    skills: ["Python", "Java", "Kotlin", "PostgreSQL"],
    color: "bg-blue-100",
  },
  {
    title: "Frontend",
    skills: ["TypeScript", "JavaScript", "React", "HTML & CSS", "SvelteKit"],
    color: "bg-yellow-100",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Terraform", "Docker", "Firebase"],
    color: "bg-red-100",
  },
  {
    title: "Data & AI",
    skills: ["Generative AI", "LLM Evaluation", "Streamlit", "Pandas"],
    color: "bg-green-100",
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
            A comprehensive toolkit spanning frontend, backend, cloud, and AI development.
            Building with the future stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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