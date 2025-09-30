export default function MissionVision() {
  return (
    <div className="min-h-screen bg-gray-200 px-4 sm:px-6 lg:px-8 pb-12 pt-27 font-satoshi text-[#484a5e]">
      <div className="max-w-7xl mx-auto space-y-15 lg:space-y-15">
        {/* Mission Section */}
        <div className="space-y-6 bg-[#e9ebf7] p-10 rounded-2xl">
          {/* Image + Title in a row */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
              <img
                src="/assets/our-mission-icon.png"
                alt="Mission Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Mission
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              At Saoirse, our mission is to create digital solutions that not
              only empower businesses and individuals, but also transform the
              way communities connect, grow, and thrive.
            </p>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              We believe technology should be accessible, inclusive, and
              beneficial for everyone — not just a privileged few.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="space-y-6 bg-[#e9ebf7] p-10 rounded-2xl">
          {/* Image + Title in a row */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
              <img
                src="/assets/our-mission-icon.png"
                alt="Mission Icon"
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Vision
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              At Saoirse, our vision is to become India's most inclusive
              technology ecosystem, creating an environment where innovation is
              nurtured, opportunities are shared, and progress benefits
              everyone.
            </p>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              We strive to make technology accessible, scalable, and impactful,
              ensuring it drives not only economic growth but also meaningful
              social transformation for individuals, businesses, and communities
              across the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
