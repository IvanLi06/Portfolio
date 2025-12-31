const featuredProject = {
  client: "Brand Networks",
  title: "AimyAI",
  image: `${import.meta.env.BASE_URL}images/AimyLogin.png`,

};

export default function FeaturedProject() {
  return (
    <section id="work">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Outer gray frame */}
        <div className="rounded-[32px] bg-[#e4e7f0] px-4 py-10 md:px-10 md:py-12">
          {/* Centered project image container (relative for overlay button) */}
          <div className="relative mx-auto w-full max-w-5xl rounded-[28px] overflow-hidden bg-neutral-900 aspect-[16/9]">
            {featuredProject.image ? (
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-neutral-400 text-sm">
                Featured project screenshot
              </div>
            )}

            {/* Overlapping arrow button */}
            <button
              className="absolute left-6 bottom-6 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-lg hover:bg-neutral-100"
              aria-label="Open project"
            >
              ↗
            </button>
          </div>
        </div>

        {/* Text underneath */}
        <div className="mt-2 md:mt-3 pb-4">
          <p className="text-[15px] md:text-[17px] text-neutral-500">
            {featuredProject.client}
          </p>
          <h3 className="text-[24px] md:text-[30px] font-semibold mt-1">
            {featuredProject.title}
          </h3>
        </div>
      </div>
    </section>
  );
}
