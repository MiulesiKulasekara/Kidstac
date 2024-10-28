import React, { useState } from "react";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: "kidstacfamily@gmail.com", // Your email
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_6l8fxvq",
        "template_nvhhuco",
        templateParams,
        "SFXsEsLqyL2KzUpt9"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email Sent");
          // Optionally clear the form fields after successful submission
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section id="kidstc-contactus">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-2xl rounded-3xl">
          <div className="mb-8 text-center">
            <h2 className="mt-2 text-4xl font-bold">Get in touch</h2>
            <p className="mt-2">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="email"
              placeholder="Your email ..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4a261] text-gray-900" // Add text color here
            />
            <textarea
              placeholder="Your message ..."
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f4a261] text-gray-900"
            ></textarea>
            <button
              type="submit"
              className="bg-[#F79733] text-white px-6 py-2 rounded-full hover:bg-[#e76f51] transition duration-300 flex items-center justify-center"
            >
              Send Message
              <ArrowRight className="ml-2" size={18} />
            </button>
          </form>

          {/* Social Media Links */}
          {/* Uncomment if needed */}
          {/* <div className="mt-8 text-center">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contactus;
