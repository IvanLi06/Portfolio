import { useState } from "react";

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const experiences = [
    {
      role: "Software Engineer Intern – Brand Networks (Augeo) | aimyads.ai",
      date: "June 2025 – Aug 2025",
      bullets: [
        "Developed features for Aimy, a conversational AI platform for SMB media planning and buying, using PostgreSQL, Next.js, React, TypeScript, and Tailwind.",
        "Integrated AI models (Anthropic Claude, OpenAI, xAI Grok, OpenRouter) using Vercel AI SDK with real-time chat streaming and image generation.",
        "Implemented APIs, fixed bugs, improved UX, built TOS pages and modals based on Figma designs, and ensured persistent chat drafts by saving text inputs.",
        "Recorded and enforced TOS acceptance logic for compliance, blocking access until the latest TOS was accepted.",
        "Implemented hai-guardrails to prevent model prompt/tool leakage and filter forbidden content.",
        "Used day.js to ensure time-zone consistency across AI system prompts and ad campaigns.",
      ],
    },
    {
      role: "Software Engineer / Quality Assurance – Tiger Snack Box | tigersnackbox.com",
      date: "Feb 2025 – July 2025",
      bullets: [
        "Developing a mobile game for Tiger Snack Box using Unity and C#, ensuring new feature merges meet QA requirements before production.",
        "Designed and enforced architectural guidelines for the Unity game project structure.",
        "Used Agile workflow, Git/GitHub, Jira for sprint planning, Confluence for documentation, and Google Meet for standups.",
      ],
    },
    {
      role: "Software Engineer Fellowship – Headstarter AI | headstarter.co",
      date: "July 2024 – Sep 2024",
      bullets: [
        "Developed 5 AI applications using ReactJS, NextJS, OpenAI, StripeAI, AWS, and Retrieval-Augmented Generation following MVC patterns.",
        "Coached by engineers from Amazon, Bloomberg, and Capital One on Agile practices, CI/CD, Git workflows, and microservice patterns.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white border-t border-neutral-300 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-[42px] font-semibold tracking-tight md:text-[52px]">
          Experience
        </h2>

        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {experiences.map((exp, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i}>
                {/* DROPDOWN HEADER */}
                <button
                  className="flex w-full items-center justify-between py-6 text-left md:py-7"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-xl font-medium tracking-tight md:text-2xl">
                    {exp.role}
                  </span>

                  {/* Smooth rotating caret */}
                  <span
                    className={`text-xl md:text-2xl transition-transform duration-500 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {/* SMOOTH DROPDOWN CONTENT */}
                  <div
                    className={`
                      overflow-hidden
                      ${
                        isOpen
                          ? "max-h-[900px] opacity-100 pb-6 md:pb-8 transition-all duration-700 ease-linear"
                          : "max-h-0 opacity-0 pb-0 transition-all duration-200 ease-out"
                      }
                    `}
                  >
                  <p className="mb-3 text-sm font-medium text-neutral-500 md:text-base">
                    {exp.date}
                  </p>

                  <ul className="space-y-2 text-sm leading-relaxed md:text-base">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="relative pl-4">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-neutral-800"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
