import React from 'react';

export default function Artist() {
  return (
    <div className="relative bg-[#F0F8FF] mb-4" id='artist'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="w-80% md:wm-2/3 lg:w-1/2, rounded-2xl overflow-hidden">
              <img
                src="/images/artistfull.jpeg"
                alt="Artist in studio"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:pl-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Aashwija Kadlabal
            </h1>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
              Aashwija is a self-taught multi-media artist from Bengaluru, India, who returned to painting in 2020 after a decade-long break. Originally reigniting her creativity to engage her son during the COVID pandemic, Aashwija soon found herself immersed in a renewed passion for art. She paints only what inspires her from within, ensuring each piece is a personal expression of her vision. By avoiding commissions, she ensures that her work remains a pure reflection of her artistic vision , driven by passion and inspiration.              </p>
              {/* <p>
                Each painting is a journey through color and texture, inspired by nature's patterns and urban landscapes. I believe in creating art that not only decorates spaces but creates conversations and stirs emotions.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

