import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Subscribe() {
  return (
    <div className="container mx-auto px-12 py-10 mt-20 ">
      <div className="relative items-center w-full mx-auto text-white bg-primary px-12 py-12 rounded-xl">
        <div className="text-center relative z-20">
          <h1 className="text-[48px] manrope text-center max-w-[716px] mx-auto">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <div className="flex justify-center mt-12 relative gap-6 z-20">
          <Input className="rounded-full bg-white text-primary h-[60px] w-[360px] px-6 !text-xl" placeholder="Your email address"/>
          <Button variant={"ghost"} className="bg-[#65E4A3] text-primary text-xl font-bold">Start Now</Button>
        </div>

        {/* top right bg mask */}
        <svg className="top-0 right-0 z-10 absolute" width="1200" height="391" viewBox="0 0 1200 391" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g mask="url(#mask0_13894_41)">
        <circle cx="1112.5" cy="-407.5" r="646.5" fill="#1C3D5B"/>
        </g>
        </svg>

      </div>
    </div>
  );
}
