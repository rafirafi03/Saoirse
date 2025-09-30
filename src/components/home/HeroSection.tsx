import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-[#e9ebf7] text-[#484a5e] pt-30 md:pt-27 font-satoshi">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 items-start text-center md:text-left">
          {/* Middle Section (The Freedom Earned) - show first on mobile */}
          <div className="order-1 md:order-2 md:col-start-2 flex flex-col items-center text-center gap-6">
            <h1 className="text-6xl leading-tight">
              The Freedom <br /> Earned
            </h1>
            <p className="text-gray-600 max-w-lg text-md">
              Saoirse empowers individuals with groundbreaking technology
              blending digital infrastructure, smart investments and
              community-driven growth.
            </p>
            <img
              src="/assets/hero-section-men-with-cash.png"
              alt="Money Man"
              className="w-80 h-auto"
            />
          </div>

          {/* Left Section */}
          <div className="order-2 md:order-1 md:col-start-1 flex flex-col items-center md:items-start gap-10">
            {/* Join Community */}
            <div
              onClick={() => navigate("/franchise")}
              className="flex items-center gap-2 lg:pt-10 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-xl">+</span>
              </div>
              <span className="text-gray-700 font-medium">
                join our <span className="font-semibold">community</span>
              </span>
            </div>

            {/* Hand with Money */}
            <div className="flex flex-col items-center md:items-start gap-4 lg:pt-15">
              <img
                src="/assets/hero-section-hand-with-money.png"
                alt="Money Hand"
                className="w-60 h-auto"
              />
              <p className="text-5xl font-semibold py-10 lg:pt-20">
                70%{" "}
                <span className="block font-normal text-gray-600 text-lg">
                  More accessible income <br />
                  compared to traditional <br /> company systems
                </span>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="order-3 md:order-3 md:col-start-3 flex flex-col items-center md:items-end gap-10">
            {/* Watch Tutorial */}
            <div className="flex flex-col items-center gap-2">
              <img
                src="/assets/hero-section-watch-tutorial.png"
                alt="Watch Tutorial"
                className="w-30 h-auto"
              />
              <span className="text-gray-600 text-sm">Watch Tutorial</span>
            </div>

            {/* Blue Shape */}
            <div className="flex flex-col items-center md:items-end gap-4 lg:pt-10">
              <img
                src="/assets/hero-section-windows-img2.png"
                alt="Blue Shape"
                className="w-40 h-auto"
              />
              <p className="text-5xl font-semibold text-left py-10 lg:pt-15">
                85%{" "}
                <span className="block font-normal text-gray-600 text-lg">
                  Faster Growth <br /> with our ad mob <br /> platform
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-gray-100 text-[#484a5e] font-satoshi"
        aria-label="Community call to action and stats"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          {/* Left: Blue glossy blob image */}
          <div className="order-3 md:order-1 flex md:justify-start justify-center px-6 md:px-8 lg:px-0 h-full items-end">
            <img
              src="/assets/hero-section-windows-img.png"
              alt="Abstract blue glossy shape"
              className="h-[120px] w-auto md:h-[160px] lg:h-[200px] xl:h-[160px] object-contain"
            />
          </div>

          {/* Center: Soft card + neon Join Now button */}
          <div className="order-2 md:order-2 flex justify-center mb-8 md:mb-0 py-8">
            <button
              type="button"
              aria-label="Join Now"
              className="relative inline-flex items-center justify-center rounded-full bg-black px-8 md:px-10 py-3 md:py-3.5 text-base md:text-lg tracking-[0.2em] text-blue-300 border border-blue-500 shadow-[0_0_0_2px_rgba(59,130,246,0.35)_inset,0_0_18px_rgba(59,130,246,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              <span className="font-medium">Join Now</span>
            </button>
          </div>

          {/* Right: 10k+ stat block */}
          <div className="order-1 md:order-3 flex md:justify-end justify-center px-6 md:px-8 lg:px-0 py-10">
            <div className="text-center md:text-left max-w-[16rem]">
              <p className="text-5xl md:text-6xl font-semibold leading-none text-black">
                10k
                <span className="text-blue-500 align-top">+</span>
              </p>
              <p className="mt-2 text-lg md:text-xl font-medium text-black">
                Users & Growings
              </p>
              <p className="mt-2 text-sm md:text-base text-gray-500 leading-relaxed">
                A Thriving Community Builted
                <br />
                Interefull Freedom
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
