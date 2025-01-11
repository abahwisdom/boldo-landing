import { BenefitIcon1, BenefitIcon2, BenefitIcon3, CheckIcon } from "@/components/icons/homeIcons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Benefits() {
  const benefitSublist = [
    {
      label:'We connect our customers with the best.',
      icon:<BenefitIcon1/>
    },
    {
      label:'Advisor success customer launch party.',
      icon:<BenefitIcon2/>
    },
    {
      label:'Business-to-consumer long tail.',
      icon:<BenefitIcon3/>
    },
  ]
  return (
    <div className="container mx-auto px-12 mt-10">
      {/* first benefit */}
      <div className="flex flex-wrap gap-40 justify-center">
        <Image src='/images/benefit-1.png' alt="benefit-1" width={494} height={610} />
        <div className="flex items-center">
          <div className="max-w-[490px]">
            <h1 className="text-[36px] manrope mt-[-36px]">
            We connect our customers with the best, and help them keep up-and stay open.
            </h1>
            <div className="flex flex-col gap-4 my-4">
              {
                benefitSublist.map((benefit, index)=>
                <div key={index} className="flex items-center gap-6">
                  <CheckIcon/>
                  <p>{benefit.label}</p>
                </div>
                )
              }
            </div>

            <Button className="mt-4">Start now</Button>
          </div>
        </div>
      </div>

      {/* second benefit */}
      <div className="flex flex-wrap gap-40 justify-center">
        <div className="flex items-center">
        <div className="max-w-[490px]">
            <h1 className="text-[36px] manrope mt-[-46px]">
            We connect our customers with the best, and help them keep up-and stay open.
            </h1>
            <div className="flex flex-col gap-4 my-4">
              {
                benefitSublist.map((benefit, index)=>
                <div key={index} className="flex items-center gap-4 p-4 rounded drop-shadow-md bg-white group cursor-pointer hover:bg-primary hover:text-white">
                  {benefit.icon}
                  <p>{benefit.label}</p>
                </div>
                )
              }
            </div>
          </div>
        </div>
        <Image src='/images/benefit-2.png' alt="benefit-2" width={444} height={610} />
      </div>
      
    </div>
  );
}