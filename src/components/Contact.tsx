import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch for professional air conditioning and electronics services in Addis Ababa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-elegant transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-card-foreground">Phone</h3>
                  <a 
                    href="tel:0908250804" 
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    090 825 0804
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-card-foreground">Hours</h3>
                  <p className="text-muted-foreground">Open 24 Hours</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available for emergency services
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-card-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    Addis Ababa 1000<br />
                    Ethiopia
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden bg-card h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16071314.41422433!2d19.372580687499994!3d10.448472375891793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b856c2d9c44fd%3A0x46daa84a3b5533af!2sAhmed%20Electronics!5e0!3m2!1sen!2set!4v1760467448571!5m2!1sen!2set"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ahmed Electronics Location"
              className="w-full h-full"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;