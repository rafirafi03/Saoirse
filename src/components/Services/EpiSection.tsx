export default function EPISection() {
  return (
    <div className="min-h-screen bg-gray-200 pt-12 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl space-y-8">
        {/* Main Blue Card */}
        <div className="relative rounded-3xl overflow-hidden bg-[url('/assets/epi-icon.png')] bg-cover bg-center shadow-2xl">
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-6 lg:mb-8 text-center underline decoration-2 underline-offset-8">
              EPI: Invest in Everyday Life, Earn Real Returns
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed mb-8 lg:mb-10 text-center max-w-4xl mx-auto">
              <span className="font-semibold">Easy Purchase Investments.</span>{" "}
              It's described as a new investment platform where users can invest
              in everyday products and earn returns through what's called "smart
              purchasing decisions". The platform aims to merge traditional
              investment concepts with the convenience of modern e-commerce..
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-10">
              <div className="bg-white rounded-xl px-6 sm:px-8 py-3 sm:py-3.5">
                <p className="text-sm sm:text-base lg:text-lg text-blue-800 font-medium text-center">
                  Daily Opportunities
                  <br />
                  For Investment
                </p>
              </div>

              <div className="bg-white rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center">
                <p className="text-sm sm:text-base lg:text-lg text-blue-800 font-medium text-center">
                  A referral income system
                </p>
              </div>

              <div className="bg-white rounded-xl px-6 sm:px-8 py-3 sm:py-3.5">
                <p className="text-sm sm:text-base lg:text-lg text-blue-800 font-medium text-center">
                  Returns based
                  <br />
                  on products
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Download Buttons and Video Player */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Google Play Button */}
          <a href="https://play.google.com/store/apps/details?id=com.saoirse.epi" className="flex-shrink-0">
            <div className="bg-black rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-gray-900 transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
                  fill="#00D9FF"
                />
                <path
                  d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"
                  fill="#FFCE00"
                />
                <path
                  d="M3.84 2.15C4.08 2.05 4.35 2 4.63 2C5.1 2 5.58 2.19 5.96 2.56L14.54 11.15L6.05 2.66L3.84 2.15Z"
                  fill="#00F076"
                />
                <path
                  d="M16.81 8.88L5.96 21.44C5.58 21.81 5.1 22 4.63 22C4.35 22 4.08 21.95 3.84 21.85L6.05 21.34L14.54 11.15L16.81 8.88Z"
                  fill="#FF3A44"
                />
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-300">Download on the</p>
                <p className="text-xl font-semibold text-white">Google Play</p>
              </div>
            </div>
          </a>

          {/* Video Player Placeholder */}
          {/* <div className="bg-black rounded-2xl w-full sm:w-64 md:w-100 h-50 overflow-hidden">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/Xwj5BjtN8eA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}

          {/* App Store Button */}
          {/* <a href="#" className="flex-shrink-0">
            <div className="bg-black rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-gray-900 transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-300">Download on the</p>
                <p className="text-xl font-semibold text-white">App Store</p>
              </div>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
}
