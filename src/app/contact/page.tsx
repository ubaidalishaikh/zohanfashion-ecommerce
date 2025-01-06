import React from "react";

export default function Contact() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">V22G+89Q, Aiwan-e-Sadar, Civil Lines, Karachi, Karachi City, Sindh 75580
          Governor House Karachi, address</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">banubaid123@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">92-317-3837517</p>
        </div>
      </div>
    </div>
    
    <div className="lg:w-1/2 md:w-2/3 bg-white shadow-md rounded-lg p-8 mx-auto">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">We Value Your Feedback</h2>
  <p className="text-sm text-gray-500 mb-6">Please let us know how we can improve or what you loved about your experience.</p>

  <div className="mb-6">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      placeholder="John Doe" 
      className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 p-3 text-gray-900 placeholder-gray-400"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="example@domain.com" 
      className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 p-3 text-gray-900 placeholder-gray-400"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
    <textarea 
      id="message" 
      name="message" 
      placeholder="Write your message here..." 
      
      className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 p-3 text-white placeholder-gray-400 resize-none"
    ></textarea>
  </div>

  <button className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    Submit Feedback
  </button>

  <p className="text-sm text-gray-400 mt-4">We appreciate your thoughts! Your feedback helps us grow and improve.</p>
</div>


  </div>
</section>

    </>
  );
}