import {
    Accordion,
    AccordionContent,
    AccordionItem,
  } from "@/components/ui/accordion";
  import * as AccordionPrimitive from "@radix-ui/react-accordion";
  import { Plus } from "lucide-react";
  
  const items = [
    {
      title: "What makes Cozzmix Solutions development process unique?",
      content: "We're all about being agile and straightforward. Our process has three simple steps: 1. Discovery & Planning, 2. Agile Development, and 3. Seamless Launch & Support. From the moment we understand your vision, we're focused on aligning everything with market needs and your goals, so you get a solid product quicker and in a more cost-effective way than with traditional agencies.",
    },
    {
      title: "How is pricing structured for your services ?",
      content:
        "Our pricing is transparent and tailored to your project's scale. the complexity of your project plays a big role more complex features will obviously take more time and increase costs. We generally charge 5 times less than traditional agencies. For instance, we start at $1,499 for a basic SaaS project, significantly less than traditional agencies which typically charge $7,000 to $8,000.",
    },
    {
      title: "Can Cozzmix Solutions help with both new projects and existing product enhancements?",
      content:
        "Absolutely. Whether you’re launching a new idea or looking to revamp an existing product, our flexible team can analyze your current codebase, integrate new features, and improve performance. Our process is designed to adapt to your unique requirements and drive success at every stage of your digital journey.",
    },
    {
      title: "How do you ensure the quality and security of your products?",
      content:
        "We prioritize quality and security at every step of our process. By sticking to industry best practices, performing thorough testing, and implementing strong security measures, we ensure our products are both innovative and secure. Our team also conducts careful code reviews to keep everything reliable.",
    },
  ];
  
  export default function AccordionSection() {
    return (
      <Accordion
        defaultValue="item-0"
        type="single"
        collapsible
        className="max-w-2xl my-4 w-full"
      >
        {items.map(({ title, content }, index) => (
          <AccordionItem className="py-2 md:py-4 xl:py-8" key={index} value={`item-${index}`}>
            <AccordionPrimitive.Header className="flex ">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-3 md:py-6 xl:py-12 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45">
                {title}
                <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }