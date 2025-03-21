import {Card, CardFooter, Image, Button} from "@heroui/react";
import Link from "next/link";

export default function CaseStudies( { data  } : any) {
  return (
    <Card isFooterBlurred className="z-4 border-none border-none mb-8 md:mb-2  min-w-72 md:min-w-96 max-w-96 h-48 md:max-w-1/2 md:h-72 xl:max-w-2/5 xl:h-96" radius="lg">
      <Image
        alt={data.alt}
        className="object-cover w-full h-full"
        src={data.mainImage}
        removeWrapper  
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{data.title}</p>
        <Link href={`casestudy/${data.slug}`} passHref>
        <Button
          className="text-tiny text-white bg-black/20 border-1 border-zinc-600 mr-4"
          color="default"
          radius="lg"
          size="md"
          variant="flat">
            View
            </Button>
            </Link>
      </CardFooter>
    </Card>
  );
}
