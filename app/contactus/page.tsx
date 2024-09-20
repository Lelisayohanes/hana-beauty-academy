import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/images/footer-bg.png')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Soft overlay */}
      
      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-90 shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47899]"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47899]"
            placeholder="Your Email"
          />
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47899]"
            placeholder="Your Message"
            rows={4}
          ></textarea>
          <button className="w-full px-4 py-2 bg-[#F47899] text-white font-semibold rounded-md hover:bg-[#e36080] transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
