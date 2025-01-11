import { BoldoLogo } from "@/components/icons/homeIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";

export default function Navbar() {
  const navigation = [
    {
      label:'Product',
      url:'#product'
    },
    {
      label:'Services',
      url:'#services'
    },
    {
      label:'About',
      url:'#about'
    },
  ];

  return (
    <div className="w-full top-0">
      <nav className="container relative flex flex-wrap items-center justify-between py-4 mt-6 md:px-12 px-4 mx-auto lg:justify-between">
        {/* Logo  */}
        <BoldoLogo />

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center gap-10">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex gap-8">
            {navigation.map((menu, index) => (
              <li className="" key={index}>
                <Link
                  href={menu.url}
                  className="inline-block px-2 py-2 font-semibold no-underline rounded-md text-primary ">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant={"outline"} size={"sm"}>Log in</Button>
        </div>
      </nav>

      {/* grey top right bg element */}
      <svg className="absolute top-0 right-0 z-[-1]" width="623" height="504" viewBox="0 0 623 504" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="646.5" cy="-142.5" r="646.5" fill="#F1F1F1"/>
      </svg>

    </div>
  );
}