import { Wind } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Wind className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-card-foreground">Ahmed Electronics</h3>
              <p className="text-sm text-muted-foreground">Professional AC & Electronics Services</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ahmed Electronics. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Serving Addis Ababa with excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;