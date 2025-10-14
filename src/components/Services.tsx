import { Wind, Wrench, Zap, Shield, Clock, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Wind,
    title: "AC Installation",
    description: "Professional installation of all major AC brands including Midea, ensuring optimal performance and efficiency.",
  },
  {
    icon: Wrench,
    title: "AC Repair & Maintenance",
    description: "Expert diagnosis and repair of air conditioning systems with preventive maintenance services.",
  },
  {
    icon: Zap,
    title: "Electronics Repair",
    description: "Specialized repair services for washing machines, refrigerators, and other home appliances.",
  },
  {
    icon: Shield,
    title: "Circuit Board Repair",
    description: "Advanced technical repairs including circuit board diagnostics and component replacement.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency service to keep your comfort systems running smoothly.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guarantee",
    description: "Trusted service with quality parts and skilled technicians ensuring customer satisfaction.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive air conditioning and electronics solutions for homes and businesses across Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;