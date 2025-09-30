export default function CTASection() {
  return (
    <div className=" bg-gray-200 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center pt-27 font-satoshi">
      <div className="w-full max-w-7xl">
        {/* Card Container */}
        <div className="relative rounded-3xl overflow-hidden bg-[url('/assets/service-hero-img.png')] bg-cover bg-center">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 text-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 lg:mb-10 leading-tight">
              Technology That Works for You
            </h1>
            
            {/* Description Paragraphs */}
            <div className="space-y-6 lg:space-y-8 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                At Saoirse, we deliver comprehensive IT solutions designed to meet the diverse needs of businesses and individuals in today's fast-evolving digital world.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                From application development and digital infrastructure to smart investment platforms and referral systems, our services are powered by cutting-edge technology, seamless scalability, and expert support.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                We don't just provide solutions — we create customized strategies that help our partners grow faster, operate smarter, and achieve long-term success.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-10 lg:mt-12">
              <button className="px-10 py-2 sm:px-16 sm:py-2 bg-opacity-20 backdrop-blur-md text-white text-base sm:text-lg font-medium rounded-full hover:bg-opacity-30 transition-all duration-300 shadow-lg border border-white border-opacity-30 cursor-pointer hover:bg-white hover:text-blue-600">
                JOIN NOW
              </button>
            </div>
          </div>
          
          {/* Optional: Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}