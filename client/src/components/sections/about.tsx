import { motion } from "framer-motion";
import { User, Server, BarChart, GraduationCap, Briefcase, Target } from "lucide-react";
import profileSketch from "@/assets/profile-sketch.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-white border-y-2 border-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">

            <div className="w-full md:w-1/3 sticky top-24">
              <div className="aspect-square bg-gray-200 border-2 border-black shadow-hard relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <User className="w-24 h-24 text-black/20" />
                </div>
                <img
                  src={profileSketch}
                  alt="Muhammad Yahya Paruk - Sketch Portrait"
                  className="w-full h-full object-cover mix-blend-normal grayscale-0 hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm font-mono p-3 border border-black bg-gray-50 shadow-hard-sm">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>IU International University</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono p-3 border border-black bg-gray-50 shadow-hard-sm">
                  <Briefcase className="w-4 h-4 text-secondary" />
                  <span>AI Trainer @ Outlier</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-8">
              <div>
                <h2 className="text-4xl font-heading font-bold flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  The Mission
                </h2>

                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    I'm <span className="text-black font-bold border-b-2 border-primary">Muhammad Yahya Paruk</span>, a Junior Software Engineer with a focus on Python development, cloud computing, and data-driven solutions.
                  </p>
                  <p>
                    I manage the complete software lifecycle—from ideation to deployment. My experience spans building smart Android apps like <span className="font-medium text-black italic">ScentCast</span> to complex automation tools.
                  </p>
                  <p>
                    Currently, I'm contributing as an <span className="bg-yellow-100 text-black px-1 border border-black/20 font-medium rotate-1 inline-block">AI Trainer</span> at Outlier, evaluating and correcting code in Java, Python, and JS to push the boundaries of LLMs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 border-2 border-black bg-gray-50 shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all">
                  <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" /> Cloud & Infrastructure
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Specialize in AWS and Terraform (IaC) to build compliant, immutable, and scalable cloud solutions.
                  </p>
                </div>
                <div className="p-6 border-2 border-black bg-white shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all">
                  <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-secondary" /> AI & Data Science
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experienced in AI model evaluation, generative AI, and PostgreSQL database design.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}