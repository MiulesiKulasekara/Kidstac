import React from 'react';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Contactus = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-2xl p-8 bg-white shadow-lg bg- rounded-3xl">

        <div className="mb-8 text-center">
          {/* <h6 className="text-[#f4a261] uppercase tracking-wide">Contact Us</h6> */}
          <h2 className="mt-2 text-4xl font-bold">Get in touch</h2>
          <p className="mt-2 ">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email ..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          />
          <textarea
            placeholder="Your message ..."
            rows="4"
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F79733] text-white px-6 py-2 rounded-full hover:bg-[#e76f51] transition duration-300 flex items-center justify-center"
          >
            Send Message
            <ArrowRight className="ml-2" size={18} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="mb-2 font-semibold text-black">Follow us:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-[#F79733] hover:text-[#e76f51]">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[#F79733] hover:text-[#e76f51]">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-[#F79733] hover:text-[#e76f51]">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;