import React from "react";
import Contactus from "./Contactus";
import logoImg from "../assets/kidstack logo-outline-no-word.png";

const Footer = () => {
  return (
    <footer className="text-white dark:bg-neutral-800" style={{ backgroundColor: "#232b2b" }}>
      <div className="min-h-0.5" style={{backgroundColor: "#F79733"}}></div>
      <div style={{ backgroundColor: "#232b2b" }} className="px-20 pt-10 pb-10">
        <div className="container flex flex-col items-start justify-between mx-auto md:flex-row md:items-center">
          {/* Logo and Info */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <img src={logoImg} className="w-auto h-40" />
            </div>
            <p className="w-2/3 mb-4 text-sm">
              Unlock a world of fun and learning with Kidstack, where education
              meets movement! Help your child grow through interactive play.
            </p>
            <div className="flex items-center space-x-2 text-lg text-orange-500">
              <span>📞</span>
              <a href="tel:+94112705357" className="font-bold">
                +94 112 705 357
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="mt-6 md:mt-0"></div>
          <Contactus />
        </div>
      </div>
      <div className="py-4 mt-8 text-sm text-center text-white border-t border-gray-300" style={{backgroundColor: "#232b2b"}}>
        <p className="">Kidstac © All Rights Reserved - 2024</p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="py-10 text-white bg-gray-900">
//       <div className="container mx-auto text-center">
//         <h2 className="mb-2 text-2xl font-semibold">Download our fitness app</h2>
//         <p className="mb-6">Stay fit. All day, every day.</p>

//         <div className="flex justify-center mb-8 space-x-4">
//           {/* Google Play Store Button */}
//           <a
//             href="#"
//             className="inline-flex items-center px-5 py-3 space-x-2 bg-gray-800 rounded-lg hover:bg-gray-700"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//               alt="Download on Google Play Store"
//               className="w-32"
//             />
//           </a>

//           {/* Apple Store Button */}
//           <a
//             href="#"
//             className="inline-flex items-center px-5 py-3 space-x-2 bg-gray-800 rounded-lg hover:bg-gray-700"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/67/Download_on_the_App_Store_Badge.svg"
//               alt="Download on Apple Store"
//               className="w-32"
//             />
//           </a>
//         </div>

//         {/* Footer links */}
//         <div className="text-sm text-gray-400">
//           <p>&copy; Beautiful Footer, 2021.</p>
//           <div className="flex justify-center mt-2 space-x-4">
//             <a href="#" className="hover:text-gray-200">About us</a>
//             <a href="#" className="hover:text-gray-200">Contact us</a>
//             <a href="#" className="hover:text-gray-200">Privacy Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
