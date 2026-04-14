"use client"

import LogoImg from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";


const NavBar = () => {
    const pathName=usePathname()
     const links = [
    { href: "/",         label: "Home",     icon: <FaHome /> },
    { href: "/timeline", label: "Timeline", icon: <IoMdTime /> },
    { href: "/stats",    label: "Stats",    icon: <ImStatsDots /> },
  ]
    

  return (
    <div className="bg-base-100 shadow-sm">
    <div className="navbar w-11/12 mx-auto">
    <div className="md:hidden">
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              
              <GiHamburgerMenu />
            </div>
            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <p className={`flex items-center gap-2 ${
                      pathName === link.href
                        ? "text-[#244D3F] font-bold"
                        : "text-[#64748B]"
                    }`}>
                      {link.icon}
                      {link.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      <div className="md:flex-1">
        <Image src={LogoImg} alt="logo" width={100} height={100}></Image>
      </div>
      
      <div className=" hidden flex-none md:flex">
        <ul className="flex space-x-5 ">
          <li>
            <Link  href="/" ><p className={`flex items-center gap-1 text-[#64748B] ${pathName === "/" ? "bg-[#244D3F] text-white " : ""} btn`}><FaHome />Home</p></Link>
          </li>
          <li>
            <Link  href={"/timeline"}><p className={`flex items-center gap-1 text-[#64748B] ${pathName === "/timeline" ? "bg-[#244D3F] text-white " : ""} btn`}><IoMdTime />Timeline</p></Link>
          </li>
          <li>
            <Link  href={"/stats"}><p className={`flex items-center gap-1 text-[#64748B] ${pathName === "/stats" ? "bg-[#244D3F] text-white " : ""} btn`}><ImStatsDots />Stats</p></Link>
          </li>
        </ul>
      </div>

       
    </div>

    </div>


  );
};

export default NavBar;
