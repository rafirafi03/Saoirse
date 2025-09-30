import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/franchise", label: "Franchise" },
  { href: "/ov-om", label: "Ov&Om" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-satoshi text-ink backdrop-blur-md py-2">
      <div className="mx-auto max-w-8xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand */}
        <a
          onClick={() => navigate("/")}
          aria-label="Home"
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/assets/Saiorse-logo.png"
            alt="Brand"
            className="h-9 w-auto"
            width={112}
            height={112}
          />
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-lg tracking-wide transition-colors ${
                      isActive
                        ? "text-blue-500"
                        : "text-ink/80 hover:text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Actions + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            onClick={() => {
              navigate("/franchise");
            }}
            className="hidden md:inline-flex items-center rounded-full border-2 border-blue-500 px-5 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
          >
            Join Now
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-between w-8 h-6 rounded group"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-full bg-black rounded transition-transform duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black rounded transition-opacity duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-black rounded transition-transform duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/80 backdrop-blur-md">
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block rounded-md px-2 py-2 text-base transition-colors ${
                      isActive
                        ? "text-blue-500"
                        : "text-ink/90 hover:bg-black/[0.04]"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <a
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-blue-500 px-4 py-2 text-sm text-blue-500 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                onClick={() => {
                  navigate("/franchise");
                  setOpen(false);
                }}
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
