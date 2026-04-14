"use client"

import LogoImg from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";


const NavBar = () => {
    const pathName=usePathname()
    

  return (
    <div className="bg-base-100 shadow-sm">
    <div className="navbar w-11/12 mx-auto">
      <div className="flex-1">
        <Image src={LogoImg} alt="logo" width={100} height={100}></Image>
      </div>
      <div className="flex-none">
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
