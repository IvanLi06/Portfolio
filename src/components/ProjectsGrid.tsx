import { Link } from 'react-router-dom';

const projects = [
  {
    slug: "wildlife-monitoring-system",
    client: "Genesee Land Trust Inc.",
    title: "Computer Vision Wildlife Monitoring System",
    image: `${import.meta.env.BASE_URL}images/BirdBoxDashboard.jpg`,
  },
  {
    slug: "ai-media-planning-platform",
    client: "Brand Networks, an Augeo Company",
    title: "AI Media Planning Platform",
    image: `${import.meta.env.BASE_URL}images/AimyColorfulDashboard2.png`,
  },
  {
    slug: "tiger-snack-box-game",
    client: "Tiger Snack Box",
    title: "Tiger Snack Box Mobile Game",
    image: `${import.meta.env.BASE_URL}images/Pack.jpg`,
  },
  {
    slug: "multiplayer-game-system",
    client: "Personal Project",
    title: "Concurrent Multiplayer Game System",
    image: `${import.meta.env.BASE_URL}images/DotsAndBoxes.png`,
  },
  {
    slug: "image-analysis-pipeline",
    client: "Personal Project",
    title: "Event-Driven Image Analysis Pipeline",
    image: `${import.meta.env.BASE_URL}images/AWS.png`,
  },
  {
    slug: "election-management-platform",
    client: "Personal Project",
    title: "Multi-Tenant Election Management Platform",
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
            <Link to={`/work/${p.slug}`} key={p.title}>
              <article className="group cursor-pointer">
                <div className="flex h-full flex-col rounded-[32px] border border-neutral-400 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative flex aspect-[4/3] items-center justify-center rounded-2xl overflow-hidden">
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
                  </div>
                  <p className="mt-4 text-xs text-neutral-500">{p.client}</p>
                  <h3 className="mt-1 text-lg font-medium tracking-tight group-hover:text-neutral-600">
                    {p.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { projects };