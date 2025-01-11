import { RightArrowIcon } from "@/components/icons/homeIcons";
import Image from "next/image";
import Link from "next/link";

export default function Services() {

    const servicesList = [
        {
            label:'Cool feature title',
            image:'/images/service-1.png',
            url:'#service'
        },
        {
            label:'Even cooler feature',
            image:'/images/service-2.png',
            url:'#service'
        },
        {
            label:'Cool feature title',
            image:'/images/service-3.png',
            url:'#service'
        }
    ]

    return (
        <div className=" mx-auto py-20 mt-10 bg-primary text-white">
            <div className="container mx-auto px-12">
                <p className="text-xl text-[#f1f1f1] text-center pb-2">Our services</p>
                <h1 className="text-[48px] manrope text-center w-[75%] mx-auto">
                    Handshake infographic mass market crowdfunding iteration.
                </h1>
                <div className="flex gap-24 justify-center mt-16">
                  {
                    servicesList.map((service, index)=>
                        <div key={index}>
                            <Image src={service.image} alt={service.label} width={300} height={300} />
                            <p className="text-2xl mt-6 mb-10">{service.label}</p>
                            <Link href={service.url} className="flex gap-2 border-b pb-2 w-fit">
                                <span className="text-xl font-bold">Explore Page</span>
                                <RightArrowIcon/>
                            </Link>
                        </div>
                    )
                  }
                </div>
            </div>
        
        </div>
    );
    }