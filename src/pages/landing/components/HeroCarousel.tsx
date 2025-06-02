import { CarouselImageItem } from "@/components/composites/CarouselImageItem";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import image1 from "@/assets/hero/hero-carousel-1.webp";
import image2 from "@/assets/hero/hero-carousel-2.webp";
import image3 from "@/assets/hero/hero-carousel-3.webp";
import image4 from "@/assets/hero/hero-carousel-4.webp";
import image5 from "@/assets/hero/hero-carousel-5.webp";

export function HeroCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="w-full bg-nca-blue"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <CarouselImageItem src={image1} alt="Carousel Item 1" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem src={image2} alt="Carousel Item 2" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem src={image3} alt="Carousel Item 3" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem src={image4} alt="Carousel Item 4" />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem src={image5} alt="Carousel Item 5" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
