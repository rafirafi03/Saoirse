export default function AboutHero() {
  return (
    <section className="w-full bg-gray-200 pt-27  font-satoshi">
      <div className="mx-auto max-w-7xl px-3 lg:px-1">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
          {/* Content */}
          <div className="relative z-10 px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
            {/* Title */}
            <h2 className="text-center text-pretty text-2xl font-semibold leading-tight md:text-3xl lg:text-5xl">
              About Saoirse IT Solutions
            </h2>

            {/* Body copy */}
            <div className="mt-6 space-y-4 text-sm leading-6 text-white/90 md:text-lg md:leading-7">
              <p>
                At Saoirse, we are not just building technology — we are shaping tomorrow’s digital infrastructure. Our
                mission is to make the future simple, smart, and scalable for everyone.
              </p>
              <p>
                Founded with a vision of freedom through innovation, Saoirse is proudly based in Kannur, Kerala, India,
                and driven by a global mindset.
              </p>

              {/* Underlined lead */}
              <p className="pt-2 text-base font-semibold underline decoration-white/80 decoration-2 underline-offset-4 md:text-lg">
                We are committed to
              </p>

              {/* Commitment bullets (styled lines to match design) */}
              <ul className="mt-1 grid gap-2 text-white/90">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/80" />
                  <span>Designing platforms that empower people to earn, invest, and grow.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/80" />
                  <span>Delivering solutions that combine cutting-edge technology with real-world accessibility.</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/80" />
                  <span>Delivering solutions that combine cutting-edge technology with real-world accessibility.</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="
              pointer-events-none absolute bottom-0 right-0
              hidden translate-x-6 translate-y-6 select-none md:block
            "
            aria-hidden="true"
          >
            <img
              src="/assets/about-phone.png"
              alt="Phone interface"
              className="h-100 w-auto opacity-95"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/15" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
