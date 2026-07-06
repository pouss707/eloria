import Header from "./Header"
import hero from "../assets/hero.jpg"
import { GiPolarStar } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { AiOutlineRuby } from "react-icons/ai";
import { GiSewingMachine } from "react-icons/gi";
import { BsLeaf } from "react-icons/bs";

function Hero() {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black/70 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black/70 to-transparent"></div>
            <Header />
            <div className="relative z-10 text-center h-screen w-screen text-white flex flex-col justify-between items-center">
                <div className="w-screen h-90  mt-50 mb-12 flex justify-between">
                    <div className="w-1/2 h-90 flex flex-col justify-center items-start pl-25">
                        <h1 className="text-3xl text-left text-[#D4AF37] my-2">TIMLESS ELEGANCE</h1>
                        <div className="flex items-center justify-items-start w-full">
                            <div className="w-28 h-px bg-[#C8A95A]/30"></div>

                            <GiPolarStar className="mx-3 text-[#C8A95A] text-lg" />

                            <div className="w-28 h-px bg-[#C8A95A]/30"></div>
                        </div>
                        <h6 className="text-6xl text-left text-[#D4AF37] my-5">Crafter For<br />Every Moment<br />You Own</h6>
                    </div>
                    <div className="w-1/2 h-90 flex flex-col justify-top items-end pr-25  ">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-px h-18 bg-[#C8A95A]/30"></div>

                                <GiPolarStar className="my-3 text-[#C8A95A] text-lg" />

                                <div className="w-px h-18 bg-[#C8A95A]/30"></div>
                            </div>
                            <h1 className="text-2xl text-left text-[#D4AF37] my-2">NEW COLLECTION</h1>
                            <h6 className="text-5xl text-left  my-2">Eternal Grace</h6>
                            <div className="flex items-center justify-center w-full">
                                <div className="w-10 h-px bg-[#C8A95A]/30"></div>

                                <GiPolarStar className="mx-3 text-[#C8A95A] text-lg" />

                                <div className="w-10 h-px bg-[#C8A95A]/30"></div>
                            </div>
                            <h1 className="text-2xl text-left   my-2">NOW AVAILABLE</h1>
                        </div>
                    </div>
                </div>
                <div className="w-[86%] h-28 flex flex-col justify-center items-center ">
                    <div className="w-screen h-28 flex justify-center items-center my-5">
                        <div className="w-80 h-28 flex justify-center items-center ">
                            <GiAmpleDress className="text-5xl text-[#D4AF37]" />
                            <div className="flex flex-col justify-center items-start ml-5 w-50 h-full">
                                <h1 className="text-1xl text-left mb-1">EXCLUSIVE DESIGNS</h1>
                                <h1 className="text-1xl text-left ">Unique styles crafted <br /> with elegance.</h1>
                            </div>
                        </div>
                        <div className="w-px h-18 bg-[#C8A95A]/30"></div>
                        <div className="w-80 h-28 flex justify-center items-center ">
                            <AiOutlineRuby className="text-5xl text-[#D4AF37]" />
                            <div className="flex flex-col justify-center items-start ml-5 w-50 h-full">
                                <h1 className="text-1xl text-left mb-1">PREMIUM QUALITY</h1>
                                <h1 className="text-1xl text-left ">Finest fabrics for comfort <br /> and luxury.</h1>
                            </div>
                        </div>
                        <div className="w-px h-18 bg-[#C8A95A]/30"></div>
                        <div className="w-80 h-28 flex justify-center items-center">
                            <GiSewingMachine className="text-5xl text-[#D4AF37]" />
                            <div className="flex flex-col justify-center items-start ml-5 w-50 h-full">
                                <h1 className="text-1xl text-left mb-1">EXPERT CRAFTSMANSHIP</h1>
                                <h1 className="text-1xl text-left ">Atention to detail <br /> in every stitch.</h1>
                            </div>
                        </div>
                        <div className="w-px h-18 bg-[#C8A95A]/30"></div>
                        <div className="w-80 h-28 flex justify-center items-center">
                            <BsLeaf className="text-5xl text-[#D4AF37]" />
                            <div className="flex flex-col justify-center items-start ml-5 w-50 h-full">
                                <h1 className="text-1xl text-left mb-1">TIMELESS BEAUTY</h1>
                                <h1 className="text-1xl text-left ">Designed to be cherished <br /> for years.</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero