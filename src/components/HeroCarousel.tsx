import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage1 from "@/assets/hero-ai-illustration.jpg";
import heroImage2 from "@/assets/hero-coding.jpg";
import heroImage3 from "@/assets/hero-team.jpg";
import heroImage4 from "@/assets/hero-ai-tech.jpg";

const HeroCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: heroImage1,
      alt: "AI Product Development Illustration",
    },
    {
      src: heroImage2,
      alt: "AI Development Workstation",
    },
    {
      src: heroImage3,
      alt: "Team Collaboration on AI Projects",
    },
    {
      src: heroImage4,
      alt: "Futuristic AI Technology",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll carousel
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-2xl shadow-large object-cover aspect-video border-2 border-blue-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-8" : "bg-muted-foreground/50"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
