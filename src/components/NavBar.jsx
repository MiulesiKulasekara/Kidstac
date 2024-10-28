import React, { useState } from "react";
import { Menu } from "lucide-react";
import logoImage from "../assets/kidstac-logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDomainOpen, setIsDomainOpen] = useState(false);
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);

  const navItemClasses =
    "flex items-center text-xs font-bold hover:text-gray-700 lg:text-sm whitespace-nowrap";
  const dropdownItemClasses = "block px-4 py-2 text-sm hover:bg-gray-100";
  const mobileNavItemClasses =
    "block py-2 px-4 hover:bg-[#F79733] text-sm font-bold";

  return (
    <nav className="relative z-50 flex items-center justify-center py-8">
      <div className="relative flex items-center justify-between px-4 py-4 bg-white rounded-full shadow-lg md:px-8">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Menu size={24} />
        </button>

        <div className="absolute flex items-center justify-center w-16 h-16 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg left-1/2 top-1/2 md:h-24 md:w-24">
          <img src={logoImage} alt="logo" className="w-auto h-12 md:h-16" />
        </div>

        <div className="justify-between hidden w-full md:flex">
          <div className="flex items-center space-x-5 lg:space-x-8">
            <a href="#kidstck-herosection" className={navItemClasses}>
              Home
            </a>

            <div
              onMouseEnter={() => setIsDomainOpen(true)}
              onMouseLeave={() => setIsDomainOpen(false)}
              className="relative"
            >
              <a href="" className={navItemClasses}>
                Project Scope
              </a>
              {isDomainOpen && (
                <div className="absolute left-0 z-10 py-2 bg-white rounded-md shadow-lg top-full">
                  <a href="#kidstc-litreview" className={dropdownItemClasses}>
                    Literature Review
                  </a>
                  <a href="#kidstc-gap" className={dropdownItemClasses}>
                    Research Gap
                  </a>
                  <a href="#kidstc-problem" className={dropdownItemClasses}>
                    Research Problem
                  </a>
                  <a href="#kidstc-objectives" className={dropdownItemClasses}>
                    Research Objectives
                  </a>
                  <a href="#kidstc-methodology" className={dropdownItemClasses}>
                    Methodology
                  </a>
                  <a href="#kidstc-technology" className={dropdownItemClasses}>
                    Technology Used
                  </a>
                </div>
              )}
            </div>

            <a href="#kidstc-milestones" className={navItemClasses}>
              Milestones
              {/* <div className="ml-"></div> */}
            </a>

            <div
              onMouseEnter={() => setIsDownloadsOpen(true)}
              onMouseLeave={() => setIsDownloadsOpen(false)}
              className="relative"
            >
              <a href="" className={`${navItemClasses} ml-24`}>
                Downloads
              </a>
              {isDownloadsOpen && (
                <div className="absolute left-0 z-10 py-2 bg-white rounded-md shadow-lg top-full">
                  <a href="#kidstc-downloads" className={dropdownItemClasses}>
                    Documents
                  </a>
                  <a href="#kidstc-downloads" className={dropdownItemClasses}>
                    Presentation Slides
                  </a>
                </div>
              )}
            </div>

            <a href="#kidstc-aboutus" className={navItemClasses}>
              About us
            </a>
            <a href="#kidstc-contactus" className={navItemClasses}>
              Contact us
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-white shadow-lg top-full md:hidden">
          <a href="#" className={mobileNavItemClasses}>
            Home
          </a>
          <a href="#" className={mobileNavItemClasses}>
            Domain
          </a>
          <a href="#" className={mobileNavItemClasses}>
            Milestones
          </a>
          <a href="#" className={mobileNavItemClasses}>
            Downloads
          </a>
          <a href="#" className={mobileNavItemClasses}>
            About us
          </a>
          <a href="#" className={mobileNavItemClasses}>
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
