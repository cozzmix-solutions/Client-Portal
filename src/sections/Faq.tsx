"use client";
import AccordionSection from "@/components/ui/accordionsection";

export const Faq = ({caseStudy}: any) => {



  return (
    <section id="features-section" className="py-6 ">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-medium text-center tracking-tighter">
      Frequently Asked Questions
      </h2>
      <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
      Questions we hear, answered!
      </p>
      <div className="my-4 md:my-8 xl:my-12 w-full flex justify-center items-center ">
      <AccordionSection />
      </div>
    </div>
  </section>
  );
};
