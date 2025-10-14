import { Video } from "lucide-react";
import { Card } from "@/components/ui/card";

const VideoGallery = () => {
  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Video Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our service videos showcasing our expertise and customer testimonials.
          </p>
        </div>

        <Card className="p-12 text-center bg-card border-2 border-dashed border-border">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-6 bg-muted rounded-full">
              <Video className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">
              Videos Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md">
              This section will be populated with videos showcasing our work, customer testimonials, and service demonstrations.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoGallery;