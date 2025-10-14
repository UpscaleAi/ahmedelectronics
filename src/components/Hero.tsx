import { Wind, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-accent via-background to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-6 bg-gradient-to-br from-primary to-primary-glow rounded-full shadow-elegant">
              <Wind className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Ahmed Electronics
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Professional Air Conditioning & Electronics Services
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert installation, repair, and maintenance of air conditioning systems, washing machines, and electronic appliances in Addis Ababa.
          </p>

          {/* Quick info */}
          <div className="flex flex-wrap gap-6 justify-center text-sm md:text-base">
            <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">090 825 0804</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="font-medium">Open 24 Hours</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-background"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;