import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiPolarStar } from "react-icons/gi";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";
import pic7 from "../assets/pic7.jpeg";
import pic8 from "../assets/pic8.jpeg";
import pic9 from "../assets/pic9.jpeg";
import pic10 from "../assets/pic10.jpeg";
import pic11 from "../assets/pic11.jpeg";
import pic12 from "../assets/pic12.jpeg";
import pic13 from "../assets/pic13.jpeg";
import pic14 from "../assets/pic14.jpeg";
import pic15 from "../assets/pic15.jpeg";
import pic16 from "../assets/pic16.jpeg";

const IMAGES = [
    { src: pic1, label: "Moonveil" },
    { src: pic2, label: "Valvet Eclipse" },
    { src: pic3, label: "Ivory bloom" },
    { src: pic4, label: "Noir sonata" },
    { src: pic5, label: "Crimson muse" },
    { src: pic6, label: "Celestial whisper" },
    { src: pic7, label: "Golden glow" },
    { src: pic8, label: "Crimson whisper" },
    { src: pic9, label: "Azure dream" },
    { src: pic10, label: "Midnight orchid" },
    { src: pic11, label: "Rose petal" },
    { src: pic12, label: "Dawn ray" },
    { src: pic13, label: "Twilight veil" },
    { src: pic14, label: "Stellar drift" },
    { src: pic15, label: "Nightfall" },
    { src: pic16, label: "Ethereal mist" },
];

function Slider() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(IMAGES.length / 4);

    function getVisibleImages() {
        let start = currentPage * 4;
        return IMAGES.slice(start, start + 4);
    }

    function goPrevious() {
        setCurrentPage(function (prev) {
            if (prev === 0) {
                return totalPages - 1;
            }
            return prev - 1;
        });
    }

    function goNext() {
        setCurrentPage(function (prev) {
            if (prev === totalPages - 1) {
                return 0;
            }
            return prev + 1;
        });
    }

    function goToPage(pageIndex) {
        setCurrentPage(pageIndex);
    }

    function renderImage(image, index) {
        return (
            <div
                key={currentPage + "-" + index}
                className="relative h-full w-60 mx-auto overflow-hidden border-3 border-[#D4AF37] bg-cover bg-center"
                style={{ backgroundImage: "url(" + image.src + ")" }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center justify-center w-full">
                        <div className="w-50 h-px bg-[#C8A95A]/30"></div>
                        <GiPolarStar className="mx-3 text-[#C8A95A] text-lg" />
                    </div>
                    <h6 className="text-lg font-semibold tracking-wide text-[#D4AF37]">{image.label}</h6>
                </div>
            </div>
        );
    }

    function renderDot(value, pageIndex) {
        let dotClass = "w-2 h-2 rounded-full transition-colors ";

        if (pageIndex === currentPage) {
            dotClass += "bg-[#D4AF37]";
        } else {
            dotClass += "bg-white/30";
        }

        return (
            <button
                key={pageIndex}
                onClick={function () {
                    goToPage(pageIndex);
                }}
                className={dotClass}
                aria-label={"Go to page " + (pageIndex + 1)}
            />
        );
    }

    let visibleImages = getVisibleImages();

    return (
        <div className="w-[90%] h-[50%] mt-9 mx-auto">
            <div className="w-full h-full flex justify-center items-center px-4">
                <button
                    onClick={goPrevious}
                    className="relative rounded-full border-[#D4AF37] border-3 mb-7 p-2 hover:bg-[#2C2C2B] cursor-pointer"
                    aria-label="Previous slide"
                >
                    <IoIosArrowBack className="text-2xl text-[#D4AF37]" />
                </button>

                <div className="flex flex-col justify-between items-center w-[95%] h-full">
                    <div className="w-full h-[94%] grid grid-cols-4 gap-4 ">
                        {visibleImages.map(renderImage)}
                    </div>

                    <div className="flex justify-center items-center gap-3 mt-6">
                        <div className="w-12 h-px bg-[#D4AF37]"></div>
                        {Array.from({ length: totalPages }).map(renderDot)}
                        <div className="w-12 h-px bg-[#D4AF37]"></div>
                    </div>
                </div>

                <button
                    onClick={goNext}
                    className="relative rounded-full border-[#D4AF37] border-3 mb-7 p-2 hover:bg-black cursor-pointer"
                    aria-label="Next slide"
                >
                    <IoIosArrowForward className="text-2xl text-[#D4AF37]" />
                </button>
            </div>
        </div>
    );
}

export default Slider;
