import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-10">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-12 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <a href="/" className="z-20">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <img 
                                src="/images/logo.jpeg" 
                                alt="AC_logo" 
                                className="h-8 sm:h-12"
                            />
                            <h2 className="text-gray-700 text-sm sm:text-lg font-semibold font-montserrat">
                                AMODA CREATIONS
                            </h2>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6 pr-5">
                        <a href="/">
                            <h2 className="text-gray-700 hover:text-gray-900 transition-colors">
                                Home
                            </h2>
                        </a>
                        <a href="#collections">
                            <h2 className="text-gray-700 hover:text-gray-900 transition-colors">
                                All Collections
                            </h2>
                        </a>
                        <a href="#contact">
                            <h2 className="text-gray-700 hover:text-gray-900 transition-colors">
                                Contact Us
                            </h2>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden z-20 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation - Positioned below logo */}
                {isMenuOpen && (
                    <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-900 md:hidden">
                        <div className="flex flex-col py-4">
                            <a 
                                href="/" 
                                className="px-4 sm:px-6 lg:px-12 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a 
                                href="#collections"
                                className="px-4 sm:px-6 lg:px-12 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                All Collections
                            </a>
                            <a 
                                href="#contact"
                                className="px-4 sm:px-6 lg:px-12 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}