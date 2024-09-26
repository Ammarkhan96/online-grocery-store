import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';

function Slider({ sliderList }) {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => {
          const imageUrl = slider?.attributes?.image?.data?.attributes?.url;
          return (
            imageUrl && (
              <CarouselItem key={index}>
                <Image className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl'
                  src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + imageUrl} 
                  width={800} height={400} alt={`Slider image ${index}`}
                />
              </CarouselItem>
            )
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Slider;
