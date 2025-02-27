import { BoldoLogo, HeroImage, PrestoLogo } from "@/components/icons/homeIcons";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto md:px-12 px-5 mt-10">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl">
            <h1 className="md:text-[48px] text-[36px] manrope">
              Save time by building  fast with Boldo Template 
            </h1>
            <p className="py-4 text-projectGray">
              Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
            </p>

            <div className="flex flex-wrap md:flex-nowrap gap-6 mt-8">
              <Button>Buy Template</Button>
              <Button variant={"outline"}>Explore</Button>
            </div>

          </div>
        </div>
        <HeroImage/>
      </div>
      
      <div className="flex flex-col justify-center mt-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-end gap-5 py-10 md:justify-around">
          <BoldoLogo width={145} height={42}/>
          <PrestoLogo/>
          <BoldoLogo width={145} height={42}/>
          <PrestoLogo/>
          <BoldoLogo width={145} height={42}/>
          <PrestoLogo/>
        </div>
      </div>
    </div>
  );
}