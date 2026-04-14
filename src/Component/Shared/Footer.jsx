import footerImg from "@/assets/logo-xl.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-10">
      <div className="w-11/12 mx-auto text-center text-white space-y-2">
        <Image
          src={footerImg}
          alt="footerlogo"
          width={250}
          height={250}
          className="mx-auto"
        ></Image>
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <p>Social Links</p>
        <div className="flex gap-3 justify-center text-black items-center">
            <div>
                <FaInstagram />
            </div>
            <div>
                <ImFacebook2 />
            </div>
            <div>
                <FaXTwitter />
            </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between items-center text-[#FAFAFA]">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex justify-between gap-6 items-center ">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
