const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Glowing orbs */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Virtual Assistant & Automation Expert
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Streamlining your business operations with efficient digital solutions
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500/80 hover:bg-blue-600/80 text-white rounded-lg backdrop-blur-sm transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#expertise"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors"
            >
              View Expertise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
