import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-300 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Name */}
        <div className="font-semibold tracking-tight">
          Ivan&nbsp;Li <span className="font-normal">[李孝蕤]</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-base text-neutral-600 md:flex">
          <a href="#about-me" className="hover:text-black">
            About
          </a>
          <a href="#work" className="hover:text-black">
            Work
          </a>
          <a href="#experience" className="hover:text-black">
            Experience
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </nav>

        {/* Right side (desktop resume + mobile hamburger) */}
        <div className="flex items-center gap-3">
          {/* Resume button (desktop) */}
          <a
            href={`${import.meta.env.BASE_URL}images/IvanLi_SWE_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-black px-4 py-1.5 text-base font-medium text-white hover:bg-neutral-800 md:inline-flex transition-transform hover:scale-[1.05]"
          >
            View&nbsp;Resume
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white/60 backdrop-blur md:hidden"
          >
            <span className="sr-only">Open menu</span>

            {/* Hamburger lines (animates to X) */}
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-5 bg-neutral-900 transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-5 bg-neutral-900 transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-5 bg-neutral-900 transition-transform duration-200 ${
                  open ? "translate-y-[-7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <nav className="flex flex-col text-base text-neutral-700">
              {[
                ["About", "#about-me"],
                ["Work", "#work"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-neutral-100 last:border-b-0 hover:text-black"
                >
                  {label}
                </a>
              ))}

              {/* Resume button (mobile) */}
              <a
                href={`${import.meta.env.BASE_URL}images/Ivan_Li_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900"
              >
                View&nbsp;Resume
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
