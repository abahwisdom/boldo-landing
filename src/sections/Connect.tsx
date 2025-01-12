import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Connect() {
  return (
    <div className="container mx-auto md:px-12 px-5 mt-24 pb-4">
      <div className="">
      <Image src='/images/connect.png' alt="benefit-1" width={1100} height={403} className="w-full h-[400px] object-cover rounded-[24px] mb-10" />
        <div className="flex md:flex-row flex-col items-start justify-between gap-16">
          <h1 className="md:text-[36px] text-[32px] flex-1 manrope">
            We connect our customers with the best, and help them keep up-and stay open. 
          </h1>
          <Accordion type="single" collapsible className="flex-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-normal">We connect our customers with the best?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-normal">Android research & development rockstar?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
      </div>
    </div>
  );
}