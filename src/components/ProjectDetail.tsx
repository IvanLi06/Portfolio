import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from './ProjectsGrid';

type ProjectContent = {
  context?: string;
  overview: string;
  role?: string;
  duration?: string;
  team?: string;
  technologies: string[];
  keyFeatures?: string[];
  challenges?: string[];
  impact?: string;
  liveDemo?: string;
};

type ProjectContentMap = {
  [key: string]: ProjectContent;
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const projectContent: ProjectContentMap = {
    "wildlife-monitoring-system": {
      context: "Genesee Land Trust needed a scalable solution to monitor wildlife activity across their nature reserves. They wanted to track different species in the area, understand their behavioral patterns, measure how frequently they appeared, and analyze their habitat usage throughout different seasons. Traditional manual observation was resource-intensive and provided limited temporal coverage, especially for nocturnal species.",
      overview: "Developed an IoT-enabled wildlife monitoring system to track bird box occupancy, identify species, and collect temporal usage data through an accessible web dashboard.",
      role: "Back-End Developer",
      duration: "September 2024 - December 2024",
      team: "7-person interdisciplinary team",
      technologies: [
        "Next.js",
        "Node.js/Express",
        "PostgreSQL",
        "Python",
        "OpenCV",
        "Raspberry Pi",
        "AWS S3"
      ],
      keyFeatures: [
        "Implemented computer vision pipeline using OpenCV for species recognition with ≥80% accuracy",
        "Built RESTful APIs for real-time data synchronization between edge devices and web dashboard",
        "Designed event-driven architecture for processing nocturnal wildlife activity with night vision capability",
        "Architected 30-day rolling data retention system with automated daily uploads",
        "Integrated Raspberry Pi hardware with weatherproof sensors for remote deployment",
        "Developed secure authentication system with MFA and token-based authorization",
        "Created responsive dashboard with Charts.js for species analytics and occupancy visualization"
      ],
      challenges: [
        "Implemented weather-resistant hardware deployment in remote locations with limited connectivity",
        "Optimized image classification for low-power edge devices while maintaining ≥80% accuracy",
        "Designed cost-effective cloud storage strategy within $25/month budget constraint"
      ]
    },
    "ai-media-planning-platform": {
    context: "Brand Networks identified a critical gap in the digital advertising market: small and medium-sized businesses lacked access to sophisticated media planning tools that were only available to Fortune 100 companies. After 15 years of serving enterprise clients, they recognized the need to democratize media buying and make AI-powered advertising accessible to businesses of all sizes and budgets. The goal was to reduce overhead costs, eliminate the need for specialized media knowledge, and enable businesses to plan, execute, and optimize campaigns across multiple channels without hiring expensive agency teams.",
    overview: "Create a conversational AI platform that enables businesses to plan, execute, and optimize paid media campaigns across all digital channels without requiring media expertise.",
    role: "Software Engineer Intern",
    duration: "June 2025 - August 2025",
    technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "OpenAI",
        "Anthropic",
        "Vercel AI SDK"
    ],
    keyFeatures: [
        "Architected and deployed scalable APIs enabling real-time campaign updates and persistent chat state",
        "Integrated multiple LLM providers (OpenAI, Anthropic, Grok) with streaming responses and runtime model selection",
        "Implemented AI safety guardrails preventing prompt leakage, system disclosure, and confidential data exposure",
        "Built schema-driven validation, error recovery, and structured logging for improved reliability",
        "Standardized timezone handling across campaign services, eliminating cross-region scheduling defects"
    ],
    impact: "Enabled businesses of all sizes to launch campaigns across Meta, Google, TikTok, and streaming TV in minutes without requiring media expertise or agency overhead. The platform drives efficiencies across media programs, reduces operational costs, and increases revenue through AI-powered optimization."
    },
    "tiger-snack-box-game": {
      context: "Tiger Snack Box, a subscription-based snack company, faced challenges with customer retention and engagement between monthly deliveries. They wanted to create a gamified experience that would keep customers connected to the brand throughout the month, increase customer lifetime value, and drive repeat purchases. The solution was a mobile game that integrated aspects of their snack box business—featuring products from their catalog and offering in-game rewards that could be redeemed for discounts and items in their online store.",
      overview: "Developed production gameplay systems for a Unity-based mobile game designed to increase customer retention by integrating Tiger Snack Box's product catalog with a rewarding gaming experience.",
      role: "Software Engineer Intern",
      duration: "February 2025 - July 2025",
      technologies: [
        "Unity",
        "C#",
        "Git",
        "Figma"
      ],
      keyFeatures: [
        "Developed production gameplay features in Unity (C#) spanning lifecycle state management and UI flows",
        "Architected modular component-based gameplay systems, reducing coupling and supporting independent iteration",
        "Owned feature development across Git branches, driving changes through pull requests and merge conflict resolution",
        "Performed QA validation and regression testing, preventing unstable builds from reaching production"
      ],
      impact: "Created an engaging mobile game that bridges the gap between monthly snack deliveries, incentivizing customers to interact with the brand and redeem rewards in the online store"
    },
    "multiplayer-game-system": {
      overview: "Engineered a real-time multiplayer Dots and Boxes game with concurrent server architecture, WebSocket communication, and interactive SVG rendering for seamless gameplay experience.",
      technologies: [
        "Go",
        "React",
        "PostgreSQL",
        "WebSockets",
        "SVG"
      ],
      keyFeatures: [
        "Engineered concurrent multiplayer architecture with authoritative server enforcement, eliminating client-side cheating and race conditions",
        "Implemented WebSocket infrastructure for lobby and room-based messaging with persistent chat history",
        "Developed interactive SVG game board with AJAX-driven updates for real-time synchronization and state restoration",
        "Deployed secure production environment (Render + Vercel) with session-based authentication and SQL injection protection"
      ],
      liveDemo: "dotsandboxes.app"
    },
    "election-management-platform": {
      overview: "Architected a scalable multi-tenant platform supporting 35,000+ users across organizational roles with customizable ballot management, reporting pipelines, and optimized database performance.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Sequelize",
        "Swagger"
      ],
      keyFeatures: [
        "Architected scalable authorization system supporting 35,000+ users across multiple organizational roles",
        "Developed RESTful services enabling customizable ballots, reporting pipelines, and election lifecycle management",
        "Optimized database performance through indexing and sharding, reducing query latency under high load",
        "Improved maintainability through Swagger API documentation and ORM-structured database access"
      ]
    },
    "image-analysis-pipeline": {
      overview: "Developed a serverless event-driven pipeline that automatically analyzes uploaded images and generates AI-based structured metadata with fault-tolerant processing at scale.",
      technologies: [
        "AWS Lambda",
        "Python",
        "S3",
        "Rekognition",
        "DynamoDB",
        "CloudWatch"
      ],
      keyFeatures: [
        "Developed event-driven pipeline automatically analyzing uploaded images and generating AI-based structured metadata",
        "Designed retry-safe workflows ensuring fault-tolerant processing of asynchronous events at scale",
        "Enforced least-privilege IAM policies, securing service communication and minimizing security risk",
        "Implemented CloudWatch observability enabling rapid debugging and traceability in production"
      ]
    }
  };

  const content = projectContent[slug as keyof typeof projectContent];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with image */}
      {project.image && (
        <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-neutral-50">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>
      )}

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        {/* Back button */}
        <Link 
          to="/#work" 
          className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to work
        </Link>

        {/* Project header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-neutral-500 mb-3">{project.client}</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            {project.title}
          </h1>
          
          {content && (content.role || content.duration || content.team) && (
            <div className="flex flex-wrap gap-6 text-sm text-neutral-600 mt-8 pt-8 border-t border-neutral-200">
              {content.role && (
                <div>
                  <span className="block text-xs font-medium text-neutral-400 mb-1">ROLE</span>
                  <span>{content.role}</span>
                </div>
              )}
              {content.duration && (
                <div>
                  <span className="block text-xs font-medium text-neutral-400 mb-1">DURATION</span>
                  <span>{content.duration}</span>
                </div>
              )}
              {content.team && (
                <div>
                  <span className="block text-xs font-medium text-neutral-400 mb-1">TEAM</span>
                  <span>{content.team}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Project content */}
        {content && (
          <div className="space-y-16">
            {/* Context/Problem Statement */}
            {content.context && (
              <section>
                <h2 className="text-sm font-medium text-neutral-400 tracking-wider uppercase mb-4">The Challenge</h2>
                <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-light">
                  {content.context}
                </p>
              </section>
            )}

            {/* Overview */}
            <section>
              <h2 className="text-sm font-medium text-neutral-400 tracking-wider uppercase mb-4">
                {content.context ? "The Solution" : "Overview"}
              </h2>
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-light">
                {content.overview}
              </p>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-sm font-medium text-neutral-400 tracking-wider uppercase mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {content.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-neutral-100 text-neutral-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Key Features */}
            {content.keyFeatures && (
              <section>
                <h2 className="text-sm font-medium text-neutral-400 tracking-wider uppercase mb-6">Key Contributions</h2>
                <div className="space-y-4">
                  {content.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-1 h-1 rounded-full bg-neutral-400 mt-3 flex-shrink-0" />
                      <p className="text-lg text-neutral-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges */}
            {content.challenges && (
              <section>
                <h2 className="text-sm font-medium text-neutral-400 tracking-wider uppercase mb-6">Technical Challenges</h2>
                <div className="space-y-4">
                  {content.challenges.map((challenge, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-1 h-1 rounded-full bg-neutral-400 mt-3 flex-shrink-0" />
                      <p className="text-lg text-neutral-700 leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Impact */}
            {content.impact && (
              <section className="bg-neutral-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-sm font-medium text-neutral-400 tracking-wider uppercase mb-4">Impact</h2>
                <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-light">{content.impact}</p>
              </section>
            )}

            {/* Live Demo
            {content.liveDemo && (
              <section className="pt-8">
                <a 
                  href={`https://${content.liveDemo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all hover:gap-4 font-medium"
                >
                  View Live Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </section>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}