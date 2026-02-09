import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "JavaScript", "TypeScript",
  "HTML & CSS", "PostgreSQL", "Kotlin", "SvelteKit",
  "AWS", "Terraform", "Docker", "Streamlit",
  "Firebase", "Generative AI", "LLM Evaluation"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary/5 border-t-2 border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Technical<br />
              <span className="text-primary underline decoration-2 underline-offset-4">Arsenal</span>
            </h2>
            <p className="text-muted-foreground">
              A comprehensive toolkit spanning frontend, backend, cloud, and AI development.
            </p>
            <div className="mt-8 p-4 bg-white border-2 border-black shadow-hard -rotate-2">
              <p className="font-hand font-bold text-lg text-center">
                "Building with the future stack."
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="px-4 py-2 bg-white border-2 border-black shadow-hard-sm cursor-default hover:shadow-hard hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <span className="font-heading font-bold text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}