import { motion } from "framer-motion";
import { User, Server, BarChart, GraduationCap, Briefcase, Workflow, Award, Code2, Database, Sparkles } from "lucide-react";
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
                  <Award className="w-4 h-4 text-primary" />
                  <span>ServiceNow CSA — Certified Sep 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono p-3 border border-black bg-gray-50 shadow-hard-sm">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>BSc Software Development — IU (2026)</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono p-3 border border-black bg-gray-50 shadow-hard-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span>RiseUp ServiceNow Alumni — Jun 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono p-3 border border-black bg-gray-50 shadow-hard-sm">
                  <Briefcase className="w-4 h-4 text-secondary" />
                  <span>AI Code Evaluator @ Outlier</span>
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
                    I'm <span className="text-black font-bold border-b-2 border-primary">Muhammad Yahya Paruk</span>, a <span className="text-black font-bold">software engineer</span> based in Durban, South Africa. I work end to end: Python and TypeScript backends, React and Next.js on the front, PostgreSQL behind, Docker and Terraform in CI, LLMs wired in with structured output.
                  </p>
                  <p>
                    Nearly two years at <span className="font-medium text-black italic">Outlier</span> reviewing AI-generated Python, Java, JavaScript, and SQL. Shipped LLM work in <span className="font-medium text-black">The Ledger</span> (Next.js 16 + Gemini + Zod). DevOps and data in <span className="font-medium text-black">The Vault</span> (Terraform on AWS) and <span className="font-medium text-black">SkyLogger</span> (Dockerised Python pipeline into PostgreSQL).
                  </p>
                  <p>
                    Also a <span className="bg-yellow-100 text-black px-1 border border-black/20 font-medium rotate-1 inline-block">ServiceNow Certified System Administrator</span> and lead developer on <span className="font-medium text-black">AgriLink</span>, the RiseUp capstone scoped app. CAD in progress.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 border-2 border-black bg-white shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all">
                  <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" /> Software Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Python, TypeScript, Java, Kotlin, SQL. Full stack web with React, Next.js, Express, and Supabase.
                  </p>
                </div>
                <div className="p-6 border-2 border-black bg-gray-50 shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all">
                  <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" /> DevOps & Cloud
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AWS with Terraform, Docker Compose, GitHub Actions, and Vercel for edge deploys.
                  </p>
                </div>
                <div className="p-6 border-2 border-black bg-blue-50 shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all">
                  <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-secondary" /> Data Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    PostgreSQL schema design, Supabase and Drizzle ORM in production, API ingestion pipelines on Docker.
                  </p>
                </div>
                <div className="p-6 border-2 border-black bg-primary/5 shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all">
                  <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" /> AI & LLM Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gemini on Next.js via the Vercel AI SDK with Zod structured output. Two years of AI code evaluation at Outlier.
                  </p>
                </div>
                <div className="p-6 border-2 border-black bg-yellow-50 shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all sm:col-span-2">
                  <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-primary" /> ServiceNow / Now Platform
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    CSA certified. Scoped apps with App Engine Studio, Flow Designer, Scripted REST, ACLs, and server-side state machines. CAD in progress.
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