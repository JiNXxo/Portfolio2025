import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-12 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute left-1/3 w-52 h-52 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      <div className="relative container mx-auto px-6 md:px-4">
        <div className="max-w-7x1 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="aspect-11/12 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 p-2 md:p-4">
                <img
                  src="leonald-pilvera.webp"
                  alt="Leonald Pilvera"
                  className="w-full h-full object-cover rounded xl object-top"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  Leonald Pilvera
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Based in the Philippines, I'm a Virtual Assistant specializing
                  in Cold Email Marketing and cutting-edge AI automation
                  solutions. With expertise in Go High Level and a passion for
                  digital innovation, I help businesses scale their operations
                  efficiently.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                    <h3 className="text-blue-400 font-semibold mb-2">
                      Experience
                    </h3>
                    <p>5+ year in digital marketing and automation</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                    <h3 className="text-blue-400 font-semibold mb-2">
                      Projects
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>

                <div className="flex gap-4 md:flex-row flex-col">
                  <a
                    onClick={() =>
                      window.open("/leonald-pilvera.pdf", " blank")
                    }
                    className="px-6 py-3 bg-blue-500/80 hover:bg-blue600/80 rounded-lg backdrop-blur-sm transition-colorstext-center cursor-pointer"
                  >
                    Download CV
                  </a>
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-colorstext-center cursor-pointer">
                    Testimonials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
