export default function Hero() {
  return (
    <section className="bg-white animate-fadeIn">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pb-14">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          Full-Stack Software Engineer
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl">
          I design, build, and ship full-stack experiences.
        </h1>

        <p className="text-[20px] mt-4 max-w-3xl text-xl leading-snug tracking-tight text-neutral-500 sm:text-2xl">
          From database to deploy, I turn ideas into usable products with clean
          code, thoughtful UX, and reliable systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href="#work" className="text-[20px] inline-flex items-center rounded-2xl bg-black px-6 py-3 font-medium text-white hover:bg-neutral-800 transition-transform hover:scale-[1.05]">
          View my work 
          <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 20L20 4M20 4h-8M20 4v8" />
          </svg>
        </a>
          <span className="text-sm text-neutral-500">
            React · Next.js, Node.js · PostgreSQL · TypeScript · AWS · AI APIs/SDKs
          </span>
        </div>
      </div>
    </section>
  );
}
