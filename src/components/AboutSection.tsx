export default function AboutSection() {
  return (
    <section id="about-me" className="bg-[#f5f5f5] py-20 md:py-24 animate-fadeIn">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[40px] bg-white px-8 py-10 shadow-sm md:px-12 md:py-12">
          {/* Make columns the same height */}
          <div className="flex flex-col gap-10 md:flex-row md:items-stretch">
            
            {/* IMAGE COLUMN — just slightly shorter */}
            <div className="md:w-1/2">
              <div className="h-full max-h-[480px] overflow-hidden rounded-3xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/Whiteboard.jpg`}
                  alt="Ivan working at a whiteboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* TEXT COLUMN */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-[34px] font-semibold tracking-tight mb-5">
                About Me
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-700">
                Ivan is a full-stack software engineer with a strong focus on
                AI-powered systems, user-centered design, and scalable
                system architecture. He has built applications across SMB's,
                MarketingTech, and enterprise teams, contributing to production-level
                features using modern technologies such as Next.js, React,
                PostgreSQL, Tailwind, Unity, AWS, and AI SDKs.
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                Passionate about building beautiful, performant, and meaningful
                digital experiences, Ivan blends strong technical engineering with
                product intuition. Outside of software, he loves UI/UX design,
                game development, and helping teams craft high-quality user
                experiences backed by thoughtful engineering.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
