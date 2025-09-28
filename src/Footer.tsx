import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { footerLinks } from "./data";

const Footer = () => {
  return (
    <div className="bg-gray-900 w-full flex justify-center ">
      <div className="px-4  py-16 lg:py-24 flex max-w-[1550px] flex-col lg:flex-row ">
        <div className=" md:min-w-[500px] flex flex-col items-center gap-6 lg:gap-8 ">
          <div className="text-white text-4xl text-center caveat-cursive">
            {" "}
            'HOUSE OF FRESHNESS'
          </div>
          <img
            src="/bakery-logo.png"
            alt="logo"
            className="h-[120px] w-[120px] bg-red-200 rounded-full"
          />
          <div>
            <div className="text-white text-4xl ">FOLLOW US</div>
            <div className="flex gap-5 text-3xl text-amber-400 w-full justify-center mt-3">
              <i className="fa-brands fa-facebook hover:cursor-pointer hover:text-white">
                <CiInstagram />
              </i>
              <i className="fa-brands fa-instagram hover:cursor-pointer hover:text-white">
                <CiYoutube />
              </i>
              <i className="fa-brands fa-twitter hover:cursor-pointer hover:text-white">
                <FaWhatsapp />
              </i>
              <i className="fa-brands fa-pinterest hover:cursor-pointer hover:text-white">
                <CiTwitter />
              </i>
            </div>
          </div>
        </div>
        <div className="px-5 mt-5 lg:mt-0">
          <div>
            <div className="text-white text-4xl text-center lg:text-left hidden sm:flex">
              ABOUT
            </div>
            <div className="text-white my-3 hidden sm:flex">
              Australian Bakery is your one-stop destination for freshly baked
              delights that combine tradition with innovation. Renowned for its
              wide range of cakes, bread, cookies, and snacks, Atul Bakery is
              committed to delivering high-quality products made with love and
              precision.
            </div>
          </div>
          <div className="flex justify-between flex-wrap mt-10 gap-5 sm:gap-0">
            {footerLinks.map((footerLink) => (
              <div key={footerLink.title} className="text-white my-5">
                <div className="text-2xl font-bold mb-3">
                  {footerLink.title}
                </div>
                {footerLink.links.map((link, index) => (
                  <div
                    key={index}
                    className="text-gray-400  hover:text-amber-400 cursor-pointer my-2"
                  >
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="text-gray-400 text-center mt-10">
        &copy; 2024 Australian Bakery. All rights reserved.
      </div> */}
      </div>
    </div>
  );
};

export default Footer;
