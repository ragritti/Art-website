import React from 'react';
import { Palette,Mails, Instagram, Youtube, Phone } from 'lucide-react';

const Footer = () => {
  const paintings = [
    'Water Colours',
    'Oil Paintings',
    'Acrylic',
    'Graphite/Charcoal',
    'Miscellaneous'
  ];

  return (
    <footer className="bg-white text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex items-center space-x-3 ">
            <div className="flex flex-col gap-1">
              <a href="/">
            <img src="/images/logo.jpeg" alt="AC_logo" className="h-20 w-20" />
              <h2 className="text-xl font-medium text-gray-700 font-montserrat">AMODA CREATIONS</h2>
              </a>
              <p className="text-sm text-gray-700">Bringing art to life</p>
            </div>
          </div>


          <div className="flex flex-col">
            <a href='#collections'>
            <h3 className="text-gray-700 font-semibold flex items-center mb-4">
              <Palette className="h-5 w-5 mr-2 text-indigo-500" />
              Paintings
            </h3>
            </a>
            <ul className="flex flex-col space-y-2">
              {paintings.map((painting) => (
                <li 
                  key={painting} 
                  className="hover:text-gray-700 transition-colors cursor-pointer text-gray-700"
                >
                  {painting}
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col" id="contact">
            <h3 className="text-gray-700 font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://youtube.com/@artivity_for_positivity?si=sAtjyo1xuyTAtj0S" 
                className="hover:text-gray-700 transition-colors p-1 text-gray-700"
                aria-label="Youtube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="mailto:amodacreations@gmail.com" 
                className="hover:text-gray-700 transition-colors p-1 text-gray-700"
                aria-label="mail"
              >
                <Mails className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/artivity_for_positivity/profilecard/?igsh=YWtiM2VzNWRqcW14" 
                className="hover:text-gray-700 transition-colors p-1 text-gray-700"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/919902066632" 
                className="hover:text-gray-700 transition-colors p-1 text-gray-700"
                aria-label="LinkedIn"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t border-gray-800 mt-6 pt-8">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} ArtisticCanvas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;