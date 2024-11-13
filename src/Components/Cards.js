// export default function Cards(props) {
//   return (
//     <div className="px-2 h-full flex">
//       <div className="h-full bg-white rounded-lg  overflow-hidden transition-transform hover:scale-[1.02]">
//         <img 
//           src={props.image} 
//           alt={props.title} 
//           className="w-full object-contain p-10 lg:h-60 lg:p-0"  // Use object-contain to show the full image
//         />
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{props.title}</h3>
//           {/* <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p> */}
//           <p className="text-lg font-bold text-gray-900 mt-2">₹{props.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Cards(props) {
  const whatsappLink = `https://wa.me/919008490445?text=${encodeURIComponent(
    `Hi, I am interested in buying the painting "${props.title}" from your collection.`
  )}`;

  return (
    <div className="px-2 h-full flex justify-center  ">
      <div className="h-full bg-white rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-60 object-contain"
          />
        </a>
        <div className="p-4 ">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {props.title}
          </h3>
          {/* <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p> */}
          <p className="text-lg font-bold text-gray-900 mt-2">₹{props.price}</p>
        </div>
      </div>
    </div>
  );
}

