import { BoldoLogo } from "@/components/icons/homeIcons";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const productsList = [
    "Home",
    "Products",
    "Services",
  ];

  const resourcesList = [
    "Blog",
    "Products",
    "Services",
  ];

  return (
    <div className="relative">
      <div className="container mx-auto md:px-12 px-5 py-10 mt-10">
        <div className="grid grid-cols-1 gap-10 pt-10 mt-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <BoldoLogo/>
            <div className="max-w-[300px] mt-10 text-gray-500 dark:text-gray-400">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
            </div>
            <div className="max-w-md mt-12 text-gray-500 dark:text-gray-400">
              All rights reserved
            </div>
          </div>

          <div>
            <div className="flex flex-col w-full text-xl">
            <div className="max-w-md mt-2 font-bold">
              Landings
            </div>
              {productsList.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-full mt-8 text-projectGray hover:text-primary focus:text-primary focus:outline-none"
                  >
                  {item}
                </Link>)
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full text-xl">
            <div className="max-w-md mt-2 font-bold">
              Company
            </div>
              <Link
                href="#"
                className="w-full mt-8 text-projectGray hover:text-primary focus:text-primary focus:outline-none"
                >
                Home
              </Link>
              <Link
                href="#"
                className="w-full flex items-center mt-8 text-projectGray hover:text-primary focus:text-primary focus:outline-none"
                >
                Career
                <Badge className="bg-[#65E4A3] text-primary px-3 py-1 font-bold ml-2">Hiring!</Badge>
              </Link>
              <Link
                href="#"
                className="w-full mt-8 text-projectGray hover:text-primary focus:text-primary focus:outline-none"
                >
                Sevices
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full text-xl">
            <div className="max-w-md mt-2 font-bold">
              Resources
            </div>
              {resourcesList.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-full mt-8 text-projectGray hover:text-primary focus:text-primary focus:outline-none"
                  >
                  {item}
                </Link>)
              )}
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}

