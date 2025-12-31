export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-900 bg-black py-16 text-white md:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between">
        {/* Left: heading */}
        <div className="max-w-xl">
          <p className="mb-6 text-xs text-neutral-400">Contact</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Let&apos;s start
            <br />
            building together.
          </h2>

          <button className="mt-10 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-100">
            Get in touch <span className="ml-1 text-base">↗</span>
          </button>
        </div>

        {/* Right: nav & socials */}
        <div className="flex w-full max-w-sm justify-between gap-10 text-sm">
          <div>
            <p className="mb-3 text-xs text-neutral-400">Navigate</p>
            <ul className="space-y-2 text-neutral-200">
              <li>
                <a href="#work" className="hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#about-me" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs text-neutral-400">Social</p>
            <ul className="space-y-2 text-neutral-200">
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      <div className="mt-12 border-t border-neutral-800 pt-6">
        <p className="mx-auto max-w-6xl px-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Ivan Li. All rights reserved.
        </p>
      </div>
    </section>
  );
}
