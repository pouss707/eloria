import about from "../assets/about.JPG"
import { GiPolarStar } from "react-icons/gi";
import aboutimg from "../assets/aboutimg.jpg";

function About() {
    return (
        <section
            id="about"
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${about})` }}
        >
            <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black/70 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black/70 to-transparent"></div>
            <div className="h-screen w-screen flex flex-col items-start">
                <div className="flex flex-col justify-center items-center ml-20 mt-5">
                    <h1 className="relative text-2xl text-white text-left">ABOUT ELORIA</h1>
                    <div className="relative flex items-center justify-center ">
                        <div className="w-11 h-px bg-[#C8A95A]/30"></div>
                        <GiPolarStar className="mx-3 text-[#C8A95A] text-lg" />
                        <div className="w-11 h-px bg-[#C8A95A]/30"></div>
                    </div>
                </div>
                <div className="flex justify-between items-center w-screen h-[80%]  ">
                    <div className="flex flex-col justify-center items-start ml-20 w-1/2 h-full ">
                        <h6 className="relative text-5xl text-white text-left">Designed for Elegance</h6>
                        <h6 className="relative text-5xl text-white text-left">Made to Be Timeless</h6>
                        <div className="relative flex items-center justify-center ml-20 my-5">
                            <div className="w-30 h-px bg-[#C8A95A]/30"></div>
                            <GiPolarStar className="mx-3 text-[#C8A95A] text-lg" />
                            <div className="w-30 h-px bg-[#C8A95A]/30"></div>
                        </div>
                        <p className="text-lg text-white text-left mb-5">At Eloria, we believe that true elegance lies in the details. <br />Our pieces are crafted with precision and passion, ensuring <br /> that each one tells a story of timeless beauty.</p>
                        <p className="text-lg text-white text-left">From the initial sketch to the final stitch, our team of skilled <br /> artisans pour their heart into every creation. We are committed <br /> to delivering not just fashion, but an experience that resonates <br /> with grace and sophistication.</p>
                    </div>
                    <div className="w-110 h-full rounded-t-full border-2 border-[#D4AF37] mr-20">
                        <img src={aboutimg} alt="About Eloria" className="w-110 h-full rounded-t-full border-4 border-black mr-20" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About