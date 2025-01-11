import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/legacy/image";
import React from "react";

export default function Testimonials() {
  
  const testimonialList = [
    {
      fullname: 'Albus Dumbledore',
      position:'Manager',
      institution:'Hogwarts',
      image:'/images/testimonial1.png',
      quote:'“Buyer buzz partner network disruptive non-disclosure agreement business”'
    },
    {
      fullname: 'Severus Snape',
      position:'Manager',
      institution:'Slytherin',
      image:'/images/testimonial2.png',
      quote:'“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”'
    },
    {
      fullname: 'Harry Potter',
      position:'Team Leader',
      institution:'Gryffindor',
      image:'/images/testimonial3.png',
      quote:'“Release facebook responsive web design business model canvas seed money monetization.”'
    }
  ]

  return (
    <div className=" mx-auto px-12 py-20 mt-24 bg-primary">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-14 text-white">
          <h1 className="text-[48px] manrope">
          An enterprise template to ramp <br/> up your company website
          </h1>
          <div className="flex gap-4">
            <ArrowLeftIcon className="text-primary w-16 h-16 bg-white p-4 rounded-full cursor-pointer"/>
            <ArrowRightIcon className="text-primary w-16 h-16 bg-white p-4 rounded-full cursor-pointer"/>
          </div>
        </div>
        <div className="flex gap-4 justify-between gap-12">
        {
          testimonialList.map((testimonial, index)=>
            <div key={index} className="flex flex-col flex-1 justify-between w-full h-full bg-white p-10 rounded-[12px] drop-shadow-md">
                <p className="text-2xl leading-normal ">
                  {testimonial.quote}
                </p>

                <Avatar
                  image={testimonial.image}
                  name={testimonial.fullname}
                  title={`${testimonial.position} @ ${testimonial.institution}`}
                />
              </div>
          )
        }
        </div>
      </div>
      
    </div>
  );
}

interface AvatarProps {
  image: string;
  name: string;
  title: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
        />
      </div>
      <div>
        <div className="font-bold text-primary mb-2">{props.name}</div>
        <div className="text-sm text-primary">{props.title}</div>
      </div>
    </div>
  );
}