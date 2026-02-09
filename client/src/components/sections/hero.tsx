import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const terminalSteps = [
  { command: "python3 skylogger.py --live", output: "Training AI Model... [Done] \n> SkyLogger: Live Aviation Dashboard ✈️" },
  { command: "terraform apply vault", output: "Acquiring Lock... \n> The Vault: Secure Cloud Archive 🔒" },
  { command: "./gradlew build ScentCast", output: "Compiling Assets... \n> ScentCast: Smart Fragrance App 💨" },
  { command: "npm run deploy LinkHub", output: "Optimizing Build... \n> LinkHub: Centralized Portfolio 🔗" },
  { command: "python3 numble_solver.py", output: "Calculating Solutions... \n> NumbleBot: Expression Finder 🔢" }
];

function TypewriterTerminal() {
  const [stepIndex, setStepIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentStep = terminalSteps[stepIndex];

    if (isTyping) {
      if (text.length < currentStep.command.length) {
        timeout = setTimeout(() => {
          setText(currentStep.command.slice(0, text.length + 1));
        }, 50 + Math.random() * 50); // Random typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setShowOutput(true);
        }, 500);
      }
    } else {
      if (showOutput) {
        timeout = setTimeout(() => {
          setShowOutput(false);
          setText("");
          setStepIndex((prev) => (prev + 1) % terminalSteps.length);
          setIsTyping(true);
        }, 3000); // How long to show the output
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, showOutput, stepIndex]);

  return (
    <div className="mt-6 w-full max-w-md bg-[#1e1e1e] rounded-sm shadow-hard border-2 border-black overflow-hidden font-mono text-sm relative group">
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-3 py-2 flex items-center justify-between border-b border-black">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/20" />
        </div>
        <div className="text-[10px] text-gray-500 font-bold">bash — 80x24</div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 text-gray-300 min-h-[100px] flex flex-col font-medium">
        <div className="flex items-center gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">{text}</span>
          <span className="w-2 h-4 bg-gray-500 animate-pulse ml-0.5 inline-block opacity-70"></span>
        </div>

        {showOutput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-2 text-green-300 whitespace-pre-line border-l-2 border-gray-600 pl-3 py-1"
          >
            {terminalSteps[stepIndex].output}
          </motion.div>
        )}
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none opacity-20 animate-scanline"></div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 md:pt-0 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex gap-3">
            <div className="inline-block px-3 py-1 bg-white border-2 border-black shadow-hard-sm rotate-[-2deg]">
              <span className="text-xs font-bold font-mono text-primary">IU_STUDENT</span>
            </div>
            <div className="inline-block px-3 py-1 bg-white border-2 border-black shadow-hard-sm rotate-[1deg]">
              <span className="text-xs font-bold font-mono text-secondary">AI_TRAINER</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Muhammad <br />
            Yahya <span className="relative inline-block text-primary">
              Paruk
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground font-light max-w-md border-l-4 border-black pl-4 py-1">
            Junior Software Engineer specializing in Python, Cloud Infrastructure, and Data Solutions.
          </p>

          <div className="flex flex-col gap-8 pt-8 mb-8">
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-primary border-2 border-black shadow-hard hover:translate-y-[2px] hover:shadow-hard-sm transition-all text-lg h-14 px-8"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                The Vault <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="Muhammad_Paruk_CV.pdf">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 border-2 border-black shadow-hard hover:translate-y-[2px] hover:shadow-hard-sm transition-all text-lg h-14 px-8"
                >
                  Download CV <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <div className="flex gap-2">
                <a href="https://github.com/Pordilz" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="bg-white border-2 border-black p-4 hover:bg-[#6e5494] hover:text-white shadow-hard transition-all h-14 w-14">
                    <Github className="w-6 h-6" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-paruk-b1a76a231/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="bg-white border-2 border-black p-4 hover:bg-[#0077b5] hover:text-white shadow-hard transition-all h-14 w-14">
                    <Linkedin className="w-6 h-6" />
                  </Button>
                </a>
              </div>
            </div>

            <TypewriterTerminal />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <a href="https://github.com/Pordilz" target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
            <div className="relative z-10 border-4 border-black bg-white p-3 shadow-hard rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img
                src={heroBg}
                alt="Developer Coding Sketch"
                className="w-full h-auto object-cover border-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                <div className="bg-white px-4 py-2 border-2 border-black font-bold flex items-center gap-2">
                  <Github className="w-5 h-5" /> Visit GitHub
                </div>
              </div>
            </div>
          </a>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-dashed border-primary/40 rounded-full animate-spin-slow"></div>
        </motion.div>
      </div>
    </section>
  );
}