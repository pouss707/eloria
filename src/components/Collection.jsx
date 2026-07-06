import collection from "../assets/collection.JPG"
import { GiPolarStar } from "react-icons/gi";
import Slider from "./Slider";


function Collection() {
    return (
        <section
            id="collection"
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${collection})` }}>
            <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black/70 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black/70 to-transparent"></div>
            <div className="h-screen w-screen flex flex-col items-start">
                <div className="flex flex-col justify-center items-center ml-20 mt-5 mb-10">
                    <h1 className="relative text-2xl text-white text-left">COLLECTION</h1>
                    <div className="relative flex items-center justify-center ">
                        <div className="w-11 h-px bg-[#C8A95A]/30"></div>
                        <GiPolarStar className="mx-3 text-[#C8A95A] text-lg" />
                        <div className="w-11 h-px bg-[#C8A95A]/30"></div>
                    </div>
                </div>
                <div className="flex justify-between items-center w-screen  ">
                    <div className="flex flex-col justify-center items-start ml-20">
                        <h6 className="relative text-white text-6xl">Timless</h6>
                        <h5 className="relative text-[#D4AF37] text-6xl italic">in Every Detail</h5>
                        <p className="relative text-white mt-5 text-xl">Each piece is a celebration of <br />elegant, designed to make every <br />moment unforgettable.</p>
                    </div>
                    <div className=" relative flex flex-col items-center mr-17">
                        <div className="w-px h-25 bg-[#C8A95A]/30"></div>

                        <GiPolarStar className="my-2 text-[#C8A95A] text-lg" />

                        <div className="w-px h-25 bg-[#C8A95A]/30"></div>
                    </div>
                </div>
                <Slider />
            </div>
        </section>
    )
}

export default Collection