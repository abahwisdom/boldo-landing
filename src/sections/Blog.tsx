import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Blog() {

    const blogsList = [
        {
            label:'Pitch termsheet backing validation focus release.',
            image:'/images/blog1.png',
            fullname:'Chandler Bing',
            url:'#blog',
            avatar:'/images/blog-avatar-1.png'
        },
        {
            label:'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            image:'/images/blog2.png',
            fullname:'Rachel Green',
            url:'#blog',
            avatar:'/images/blog-avatar-2.png'
        },
        {
            label:'Beta prototype sales iPad gen-z marketing network effects value proposition',
            image:'/images/blog3.png',
            fullname:'Monica Geller',
            url:'#blog',
            avatar:'/images/blog-avatar-3.png'
        }
    ]

    return (
        <div className=" mx-auto px-12 py-10 mt-10">
            <div className="container mx-auto">
                <p className="text-xl text-projectGray text-center pb-2">Our Blog</p>
                <h1 className="text-[48px] manrope text-center max-w-[960px] mx-auto">
                    Value proposition accelerator product management venture
                </h1>
                <div className="flex gap-12 justify-center mt-16">
                  {
                    blogsList.map((blog, index)=>
                        <div key={index} className="flex-1">
                            <Image src={blog.image} alt={blog.label} width={300} height={300} className="w-full" />
                            <div className="mt-6 mb-3 flex gap-3"><p className="font-bold">Category</p> <p className="text-projectGray">November 22, 2021</p></div>
                            <p className="text-xl line-clamp-3 h-[86px]">{blog.label}</p>
                            <Avatar image={blog.avatar} name={blog.fullname}/>
                        </div>
                    )
                  }
                </div>
                <div className="flex justify-center mt-20">
                    <Button variant={"outline"}>Load more</Button>
                </div>
            </div>
        
        </div>
    );
}

interface AvatarProps {
    image: string;
    name: string;
}

function Avatar(props: AvatarProps) {
return (
    <div className="flex items-center mt-4 space-x-3">
    <div className="flex-shrink-0 overflow-hidden rounded-full w-8 h-8">
        <Image
        src={props.image}
        width="32"
        height="32"
        alt="Avatar"
        layout="responsive"
        />
    </div>
    <div>
        <div className="">{props.name}</div>
    </div>
    </div>
);
}