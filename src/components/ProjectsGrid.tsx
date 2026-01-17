const projects = [
  {
    client: "In Progress...",
    title: "Species Recognition And Activity Tracking Bird Box",
    image: `${import.meta.env.BASE_URL}.png`,
  },
  {
    client: "Brand Networks, an Augeo Company",
    title: "Aimyads.ai - AI-Powered Media Buying Assistant",
    image: `${import.meta.env.BASE_URL}images/AimyLogin.png`,
  },
  {
    client: "Tiger Snack Box",
    title: "Tiger Snack Box Mobile Game",
    image: `${import.meta.env.BASE_URL}images/Pack.jpg`,
  },
  {
    client: "Personal Project",
    title: "Golang Dots And Boxes Multiplayer Game",
    image: `${import.meta.env.BASE_URL}images/DotsAndBoxes.png`,
  },
  {
    client: "Personal Project",
    title: "AWS Serverless Image Analyzer",
    image: `${import.meta.env.BASE_URL}images/AWS.png`,
  },
  {
    client: "Personal Project",
    title: "Election Management System",
    image: `${import.meta.env.BASE_URL}images/.png`,
  },
];

export default function ProjectsGrid() {
  return (
    <section id="work" className="bg-white scroll-mt-10">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="pt-10 pb-6 text-[42px] font-semibold tracking-tight md:text-[52px]">
          Work
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title}>
              <div className="flex h-full flex-col rounded-[32px] border border-neutral-400 p-6">
                <div className="relative flex aspect-[4/3] items-center justify-center rounded-2xl bg-neutral-900">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  ) : (
                    <span className="text-xs text-neutral-400">
                      {p.title} image
                    </span>
                  )}

                  <button className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm hover:bg-neutral-100">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20L20 4M20 4h-8M20 4v8" />
                  </svg>
                  </button>
                </div>
                  <p className="mt-4 text-xs text-neutral-500">{p.client}</p>
                <h3 className="mt-1 text-lg font-medium tracking-tight">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
