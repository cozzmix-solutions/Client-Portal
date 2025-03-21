import React, { Suspense } from 'react';
import { Carousel } from "@/components/ui/apple-cards-carousel";
import dynamic from 'next/dynamic';
import { VideoSkeleton } from '../components/ui/VideoSkeleton';


export interface VideoTestimonial {
  _id: string;
  companyName: string;
  clientName: string;
  videoUrl: string;
  thumbnailUrl: string;
  transcript: string;
}


// Dynamically import VideoCard to reduce initial bundle size
const VideoCard = dynamic(() => import('../components/ui/videocard'), {
  suspense: true,
  loading: () => <VideoSkeleton />
});

interface TestimonialsProps {
  testimonials: VideoTestimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const items = testimonials?.map((testimonial) => (
    <Suspense key={testimonial._id} fallback={<VideoSkeleton />}>
      <VideoCard
        title={testimonial.companyName}
        clientName={testimonial.clientName}
        videoUrl={testimonial.videoUrl}
        thumbnailUrl={testimonial.thumbnailUrl}
        transcript={testimonial.transcript}
      />
    </Suspense>
  ));

  return (
    <section 
      id="testimonials-section" 
      className="py-20 md:py-24"
      aria-label="Client Testimonials"
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-medium text-center tracking-tighter">
        Don't just take our word for it. Take theirs.
        </h2>
        <p className="text-white/70 text-lg md:text-xl mt-5 tracking-tight text-center max-w-sm mx-auto">
        What our customers say about our work.
        </p>
        <div className="overflow-hidden mt-2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="mt-2 md:mt-4">
            <Carousel items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};