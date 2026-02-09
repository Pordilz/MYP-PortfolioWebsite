import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Cloud, Code, Database, Mail, Home, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: <Home className="w-4 h-4" />, href: "#hero" },
    { name: "The Mission", icon: <GraduationCap className="w-4 h-4" />, href: "#about" },
    { name: "Projects", icon: <Briefcase className="w-4 h-4" />, href: "#projects" },
    { name: "Skills", icon: <Database className="w-4 h-4" />, href: "#skills" },
    { name: "Connect", icon: <Mail className="w-4 h-4" />, href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white border-2 border-black shadow-hard rounded-md md:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 h-full w-64 bg-background border-r-2 border-black z-40 transform transition-transform duration-300 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 flex flex-col h-full">
          <div className="mb-12">
            <h1 className="text-2xl font-heading font-bold tracking-tighter">
              M<span className="text-primary">.</span>PARUK
            </h1>
            <p className="text-xs text-muted-foreground font-hand mt-1">Junior Software Engineer</p>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 hover:translate-x-1 transition-all group text-left"
              >
                <div className="p-2 bg-white border border-black shadow-hard-sm group-hover:shadow-none transition-all">
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t-2 border-dashed border-black/20">
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-black text-white hover:bg-primary border-2 border-transparent hover:border-black shadow-none hover:shadow-hard transition-all"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}