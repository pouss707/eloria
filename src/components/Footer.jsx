import { GiPolarStar } from "react-icons/gi";
import logo from "../assets/logo.png"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-screen h-100 bg-black flex flex-col justify-between ">
            <div className="flex items-center justify-center w-screen mt-4">
                <div className="w-screen h-0.5 bg-[#D4AF37]/30"></div>

                <GiPolarStar className="mx-3 text-[#D4AF37] text-7xl" />

                <div className="w-screen h-0.5 bg-[#D4AF37]/30"></div>
            </div>
            <div className="grid grid-cols-3 gap-30 w-screen h-60 mb-8">
                <div className="flex flex-col justify-center items-start mx-auto">
                    <img src={logo} alt="Logo" className="w-45 h-25 ml-3" />
                    <h1 className="text-white text-xl  mb-2">TIMELESS ELEGANCE</h1>
                    <p className="text-white text-sm mt-2">Premium craftsmanship. Timeless design.</p>
                    <p className="text-white text-sm mt-2">Made for every unforgettable moment.</p>
                </div>
                <div className="flex flex-col justify-start items-start mx-auto mt-10">
                    <h6 className="text-[#D4AF37] text-lg  ">QUICK LINKS</h6>
                    <ul className="text-white text-sm mt-2 flex flex-col gap-1">
                        <li><a href="#home" className="hover:text-[#D4AF37] ">Home</a></li>
                        <li><a href="#about" className="hover:text-[#D4AF37] ">About</a></li>
                        <li><a href="#mint" className="hover:text-[#D4AF37] ">Collection</a></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-start mx-auto mt-10">
                    <h6 className="text-[#D4AF37] text-lg font-bold ">CONTACT</h6>
                    <ul className="text-white text-sm mt-2 flex flex-col gap-1">
                        <li className="flex items-center gap-1"><MdOutlineMail className="text-[#D4AF37] text-lg" /> <a href="mailto:info@timelesselegance.com" className="hover:text-[#D4AF37]">info@timelesselegance.com</a></li>
                        <li className="flex items-center gap-1"><FiPhone className="text-[#D4AF37] text-lg" /> Phone: <a href="tel:+1234567890" className="hover:text-[#D4AF37]">+1 (234) 567-890</a></li>
                        <li className="flex items-center gap-1"><IoLocationOutline className="text-[#D4AF37] text-lg" /> Address: <span className="hover:text-[#D4AF37]">123 Elegance St, Fashion City, USA</span></li>
                    </ul>
                    <h6 className="text-[#D4AF37] text-lg font-bold mt-4">FOLLOW US</h6>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.instagram.com" className="text-[#D4AF37] text-2xl ">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com" className="text-[#D4AF37] text-2xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.pinterest.com" className="text-[#D4AF37] text-2xl">
                            <FaPinterest />
                        </a>
                        <a href="https://www.tiktok.com" className="text-[#D4AF37] text-2xl">
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-screen h-0.5 bg-[#D4AF37]/30 "></div>
            <div className="flex justify-center items-center w-screen h-10 bg-black">
                <p className="text-white text-sm mt-4 flex items-center gap-1 my-auto"><FaRegCopyright /> 2026 ELORIA. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer