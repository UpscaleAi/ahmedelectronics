import { useState } from "react";
import { X } from "lucide-react";
import techWork1 from "@/assets/gallery/technician-work-1.webp";
import circuitBoard from "@/assets/gallery/circuit-board.webp";
import acRepair from "@/assets/gallery/ac-repair.webp";
import techWork2 from "@/assets/gallery/technician-work-2.webp";
import washingMachines from "@/assets/gallery/washing-machines.webp";
import washerRepair from "@/assets/gallery/washer-repair.webp";
import mideaUnits from "@/assets/gallery/midea-units.webp";

const images = [
  { src: techWork1, alt: "Technician working on AC installation" },
  { src: mideaUnits, alt: "Midea AC units and refrigerants" },
  { src: circuitBoard, alt: "Circuit board repair and diagnostics" },
  { src: acRepair, alt: "Air conditioning unit repair" },
  { src: techWork2, alt: "Professional AC maintenance service" },
  { src: washingMachines, alt: "Washing machine repair services" },
  { src: washerRepair, alt: "Appliance repair expertise" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our professional team in action delivering quality service across Addis Ababa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group bg-muted"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;