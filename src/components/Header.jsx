
import logo from "../assets/logo.png"




function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-20 px-6 py-4">
            <div className="mx-auto flex items-center justify-between text-white">
                <img className="w-30 h-15" src={logo} alt="Eloria Logo" />
                <nav className="flex gap-6 text-sm text-white/90 justify-center items-center">
                    <a href="#home" className="text-black border-b-2 border-[#D4AF37]">Home</a>
                    <a href="#about" className="text-black border-b-2 border-[#D4AF37]">About</a>
                    <a href="#contact" className="text-black border-b-2 border-[#D4AF37]">Contact</a>
                    <a href="#collection" className="text-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#2C2C2B] border-2 border-[#D4AF37] px-2 py-1">Explore collection</a>
                </nav>
            </div>
        </header>
    )
}

export default Header