import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io"; function BackUpButton() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {showScroll && (
                <button
                    className="fixed bottom-8 right-4  border-2 border-[#D4AF37] bg-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 transition-opacity duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Go to top"
                >
                    <IoIosArrowUp className="text-[#D4AF37]" fontSize="large" />
                </button>
            )}
        </div>
    )
}

export default BackUpButton