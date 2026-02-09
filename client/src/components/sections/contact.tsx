import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Linkedin, Github, Mail, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // TODO: Replace this with your actual Formspree Form ID
  // 1. Go to https://formspree.io/
  // 2. Create a new form
  // 3. Copy the Form ID (it looks like "xkqjwnqz")
  const FORMSPREE_FORM_ID = "mwvnpyep";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out, Yahya will get back to you soon.",
        });
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 bg-white border-t-2 border-black relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-background border-2 border-black shadow-hard p-8 md:p-12 rounded-sm">

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Connect & Collaborate</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Looking for a Junior Software Engineer with a knack for cloud and Python? Let's chat.
              </p>

              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/muhammad-paruk-b1a76a231/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-black bg-white shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all group">
                  <div className="bg-[#0077b5] text-white p-2 border border-black group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">LinkedIn</h3>
                    <p className="text-xs text-muted-foreground">muhammad-paruk-b1a76a231</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-black/20 group-hover:text-black" />
                </a>

                <a href="https://github.com/Pordilz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border-2 border-black bg-white shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all group">
                  <div className="bg-black text-white p-2 border border-black group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">GitHub</h3>
                    <p className="text-xs text-muted-foreground">Pordilz</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-black/20 group-hover:text-black" />
                </a>

                <a href="mailto:yahyafparuk@gmail.com" className="flex items-center gap-4 p-4 border-2 border-black bg-white shadow-hard hover:translate-x-1 hover:-translate-y-1 transition-all group">
                  <div className="bg-secondary text-white p-2 border border-black group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">Email</h3>
                    <p className="text-xs text-muted-foreground">yahyafparuk@gmail.com</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-black/20 group-hover:text-black" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 border-2 border-black shadow-hard">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Muhammad Yahya" {...field} className="border-2 border-black/10 focus-visible:border-black focus-visible:ring-0 rounded-none bg-transparent h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="yahyafparuk@gmail.com" {...field} className="border-2 border-black/10 focus-visible:border-black focus-visible:ring-0 rounded-none bg-transparent h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Project Details</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can I help you today?" className="min-h-[100px] border-2 border-black/10 focus-visible:border-black focus-visible:ring-0 rounded-none bg-transparent resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-black text-white hover:bg-primary border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all h-14 font-heading font-bold text-lg mt-4">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>

        <footer className="mt-20 pt-8 border-t-2 border-black/10 text-center text-muted-foreground text-xs font-mono">
          <p>© {new Date().getFullYear()} Muhammad Yahya Paruk. Junior Software Engineer.</p>
        </footer>
      </div>
    </section>
  );
}