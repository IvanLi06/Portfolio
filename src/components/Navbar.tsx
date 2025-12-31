export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Name */}
        <div className="font-semibold tracking-tight">
          Ivan&nbsp;Li <span className="font-normal">[李孝蕤]</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-base text-neutral-600">
          <a href="#about-me" className="hover:text-black">About</a>
          <a href="#work" className="hover:text-black">Work</a>
          <a href="#experience" className="hover:text-black">Experience</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>


        {/* Resume button */}
        <a
          href={`${import.meta.env.BASE_URL}images/Ivan_Li_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-4 py-1.5 text-base font-medium text-white hover:bg-neutral-900"
        >
          View&nbsp;Resume
        </a>
      </div>
    </header>
  );
}
