import { cn } from "@/lib/utils";
import { Image} from "@heroui/react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "web3 development company",
      description:
        "At Cozzmix Solutions, we offer top-notch Web3 development services that help businesses thrive in the decentralized digital world. Whether it's creating custom dApps, building innovative DeFi platforms, or crafting immersive metaverse experiences, our team is dedicated to delivering tailored solutions that meet your needs. We specialize in developing secure smart contracts, robust NFT marketplaces, and seamlessly integrating Web3 technologies into your existing systems. Partner with us to unlock your potential in the evolving digital economy with confidence and professionalism.",
      icon: `https://ik.imagekit.io/jag4jmnvb/service1.jpeg?updatedAt=1742487998411`,
    },
    {
      title: "saas development services",
      description:
        "We specialize in blending innovative software practices with user-friendly design to create secure, scalable SaaS applications that exceed expectations. Whether you’re launching a B2B or B2C product, developing an MVP, or scaling an existing solution, our full-cycle approach—from planning to launch—cuts costs, ensures smooth upgrades, and boosts user adoption. Let us help your business achieve steady, profitable growth with our expert SaaS development services.",
      icon: `https://ik.imagekit.io/jag4jmnvb/service5.jpeg?updatedAt=1742487998387`,
    },
    {
      title: "AI development company",
      description:
        "Looking for effective AI solutions? We create tailored systems that truly deliver results. From basic API integration to building AI agents, RAG workflows, and customizable chatbots, we cover it all. Our fine-tuning and document analysis ensure your solution fits perfectly. We're with you every step of the way, from strategy to deployment, helping your business innovate and grow efficiently.",
      icon: `https://ik.imagekit.io/jag4jmnvb/service3.jpeg?updatedAt=1742487998414`,
    },
    {
      title: "Enterprise software development",
      description: "At Cozzmix Solutions, we help businesses innovate and boost efficiency with custom software development. We modernize legacy systems and ensure seamless integration with your existing infrastructure to provide valuable insights. Our skilled team designs tailored digital products, including automation and mobility services, empowering you to thrive in today’s fast-paced market. Join leading brands that trust us to deliver secure and agile software solutions that give you a competitive edge.",
      icon: `https://ik.imagekit.io/jag4jmnvb/service4.jpeg?updatedAt=1742487998391`,
    },
    {
      title: "cross platform mobile app development services",
      description: "We're all about creating high-performance mobile apps that work smoothly across devices. With our talented team and tools like React Native, we build efficient apps for iOS and Android while ensuring top-notch quality through rigorous testing. Whether it’s development or ongoing support, we’re committed to helping your app succeed in today’s market.",
      icon: `https://ik.imagekit.io/jag4jmnvb/service2.jpeg?updatedAt=1742487997950`,
    },
    {
      title: "custom web application development services ",
      description:
        "Cozzmix Solutions builds custom web applications to fit your business needs. From dynamic web apps to eCommerce platforms and IoT solutions, our team handles design, development, and optimization. With the latest technology, we create secure, scalable applications that drive growth. Whether starting fresh or upgrading, we have the expertise to make it happen.",
      icon: `https://ik.imagekit.io/jag4jmnvb/service6.jpeg?updatedAt=1742487998383`, 
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-500",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-500",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-800 absolute inset-0 h-full w-full bg-[#2628fd] pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-800 absolute inset-0 h-full w-full bg-[#2628fd] pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white ">
      <Image
        alt={"image1"}
        className="object-cover hidden md:block w-[20vw] h-[450px]"
        src={`${icon}`}
        removeWrapper  
      />
            <Image
        alt={"image1"}
        className="object-cover block md:hidden  w-[80vw] h-[250px]"
        src={`${icon}`}
        removeWrapper  
      />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <h2 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-200 dark:text-neutral-100 mb-4">
          {title}
        </h2>
      </div>
      <p className="text-xs text-gray-400  max-w-lg relative z-10 px-10 text-justify">
        {description}
      </p>
    </div>
  );
};
