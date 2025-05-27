import { CarouselImageItem } from "@/components/composites/CarouselImageItem";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
          <CarouselImageItem
            src="/hero/hero-carousel-1.webp"
            alt="Carousel Item 1"
          />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem
            src="/hero/hero-carousel-2.webp"
            alt="Carousel Item 2"
          />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem
            src="/hero/hero-carousel-3.webp"
            alt="Carousel Item 3"
          />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem
            src="/hero/hero-carousel-4.webp"
            alt="Carousel Item 4"
          />
        </CarouselItem>
        <CarouselItem>
          <CarouselImageItem
            src="/hero/hero-carousel-5.webp"
            alt="Carousel Item 5"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
