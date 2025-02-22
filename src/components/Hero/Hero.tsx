import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Glowing Obrs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-52 h-52 md:w-72 md:h-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-44 h-44 md:w-60 md:h-60 rounded-full bg-indigo-500/20 blur-3xl"></div>
      </div>

      {/* Hero content will go here */}
      <div className="relative contianer mx-auto px-6 md:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Virtual Assistant & Automation Expert</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 px-4">Streamlining your business operations with efficient digital solutions</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <a href="#Contact" className="w-full sm:w-auto px-8 py-3 bg-blue-500/80 hover:bg-blue-600/80  text-white rounded-lg backdrop-blur-sm transition-colors text-center"
            >
              Get in touch
              </a>

            <a href="#Experties" className="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors text-center"
            >
              View Experties
              </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
