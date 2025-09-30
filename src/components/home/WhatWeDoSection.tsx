export default function WhatWeDo() {
  return (
    <section aria-labelledby="what-we-do-title" className="w-full bg-gray-200 text-[#484a5e] font-satoshi">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <h2
            id="what-we-do-title"
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            What We Do
          </h2>
          <p className="mt-3 md:mt-4 text-2xl leading-relaxed">
            With 75+ service categories, we create digital platforms that
            transform businesses and empower communities.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left large card */}
          <article className="bg-gray-50 border border-gray-200 shadow-sm p-6 md:p-8 flex flex-col">
            <h3 className="text-2xl md:text-5xl font-semibold">
              Empowering Your Earnings
            </h3>
            <p className="mt-2 text-xl text-gray-600 leading-relaxed">
              Spend just 10 minutes daily on our app and start earning through
              Google AdMob ads
            </p>

            {/* Illustration pinned to bottom */}
            <div className="mt-6 md:mt-8">
              <img
                src="/assets/whatwedo-img.png"
                alt="People using a mobile app and earning together"
                className="w-100 mx-auto"
              />
            </div>
          </article>

          {/* Right column stacked cards */}
          <div className="grid grid-rows-2 gap-6 md:gap-8">
            {/* Digital Platforms card */}
            <article className="rounded-tr-4xl bg-gray-50 border border-gray-200 shadow-sm p-6 md:p-8 flex flex-col justify-center h-full gap-y-5">
              <h3 className="text-2xl md:text-5xl font-semibold text-left">
                Digital Platforms
              </h3>
              <p className="mt-2 text-xl text-gray-600 leading-relaxed text-left">
                Building innovative platforms like EPI (Easy Purchase
                Investment) that revolutionize how people interact with digital
                services.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-blue-600 text-xl underline underline-offset-4 text-left"
              >
                Currently Live: EPI Platform
              </a>
            </article>

            {/* Future Innovation card */}
            <article className="rounded-tr-4xl bg-gray-50 border border-gray-200 shadow-sm p-6 md:p-8 flex flex-col justify-center h-full gap-y-5">
              <h3 className="text-2xl md:text-5xl font-semibold text-left">
                Future Innovation
              </h3>
              <p className="mt-2 text-xl leading-relaxed text-left">
                Developing e-Revenue platform and planning full-scale e-commerce
                solutions for 2026.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-blue-600 text-xl underline underline-offset-4 text-left"
              >
                Coming Soon: e-Revenue
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
