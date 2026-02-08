import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from './ProjectsGrid';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  type ProjectContent = {
  context?: string;
  overview: string;
  role?: string;
  duration?: string;
  team?: string;
  technologies: string[];
  keyFeatures?: string[];
  technicalHighlights?: string[];
  challenges?: string[];
  impact?: string;
  liveDemo?: string;
};

type ProjectContentMap = {
  [key: string]: ProjectContent;
};

  // Project-specific content for ALL projects
  const projectContent: ProjectContentMap = {
    "wildlife-monitoring-system": {
      context: "Genesee Land Trust needed a scalable solution to monitor wildlife activity across their nature reserves. They wanted to track different species in the area, understand their behavioral patterns, measure how frequently they appeared, and analyze their habitat usage throughout different seasons. Traditional manual observation was resource-intensive and provided limited temporal coverage, especially for nocturnal species.",
      overview: "Developed an IoT-enabled wildlife monitoring system for Genesee Land Trust to track bird box occupancy, identify species, and collect temporal usage data through an accessible web dashboard.",
      role: "Back-End & Database Developer",
      duration: "August 2025 - May 2026",
      team: "6-person interdisciplinary team",
      technologies: [
        "Next.js",
        "Node.js/Express",
        "PostgreSQL (Supabase)",
        "Python",
        "OpenCV",
        "Raspberry Pi",
        "AWS S3"
      ],
      keyFeatures: [
        "Implemented computer vision pipeline using OpenCV for species recognition with ≥90% accuracy",
        "Built RESTful APIs for real-time data synchronization between edge devices and web dashboard",
        "Designed event-driven architecture for processing nocturnal wildlife activity with night vision capability",
        "Architected 30-day rolling data retention system with automated daily uploads",
        "Integrated Raspberry Pi hardware with weatherproof sensors for remote deployment in nature reserves",
        "Developed secure authentication system with MFA and token-based authorization"
      ],
      technicalHighlights: [
        "Event-driven image processing pipeline with Python and OpenCV for automated species classification",
        "PostgreSQL database with optimized schema for temporal wildlife data and image metadata",
        "RESTful API design with Express.js enabling real-time sensor-to-dashboard communication",
        "Solar-powered edge computing with cellular data transfer for remote locations",
        "Responsive dashboard with Charts.js for species analytics and occupancy visualization",
        "Argon2id password hashing with MFA for secure multi-user access"
      ],
      challenges: [
        "Implemented weather-resistant hardware deployment in remote locations with limited connectivity",
        "Optimized image classification for low-power edge devices while maintaining ≥90% accuracy target",
        "Designed cost-effective cloud storage strategy within $25/month budget constraint"
      ]
    },
    "ai-media-planning-platform": {
      context: "Brand Networks identified a critical gap in the digital advertising market: small and medium-sized businesses lacked access to sophisticated media planning tools that were only available to Fortune 100 companies. After 15 years of serving enterprise clients, they recognized the need to democratize media buying and make AI-powered advertising accessible to businesses of all sizes and budgets. The goal was to reduce overhead costs, eliminate the need for specialized media knowledge, and enable businesses to plan, execute, and optimize campaigns across multiple channels without hiring expensive agency teams.",
      overview: "Built production features for Aimy, an AI-powered media planning platform that automates campaign workflows for SMB advertisers, enabling real-time campaign management and AI-driven user interactions.",
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
        "Integrated multiple LLM providers (OpenAI, Anthropic, Grok) using Vercel AI SDK with streaming responses and runtime model selection",
        "Implemented AI safety guardrails preventing prompt leakage, blocking system and tool disclosure, and filtering confidential model outputs",
        "Built schema-driven validation, error recovery, and structured logging for improved application reliability",
        "Standardized timezone handling across campaign services, eliminating cross-region scheduling defects"
      ],
      impact: "Enabled SMB advertisers to launch cross-channel campaigns across Meta, Google, TikTok, and streaming TV in minutes—without requiring media expertise or agency overhead"
    },
    "tiger-snack-box-game": {
      context: "Tiger Snack Box, a subscription-based snack company, faced challenges with customer retention and engagement between monthly deliveries. They wanted to create a gamified experience that would keep customers connected to the brand throughout the month, increase customer lifetime value, and drive repeat purchases. The solution was a mobile game that integrated aspects of their snack box business—featuring products from their catalog and offering in-game rewards that could be redeemed for discounts and items in their online store.",
      overview: "Developed production gameplay systems for a Unity-based mobile game designed to increase customer retention by integrating Tiger Snack Box's product catalog with a rewarding gaming experience that drives store purchases.",
      role: "Software Engineer Intern",
      duration: "February 2025 - July 2025",
      technologies: [
        "Unity",
        "C#",
        "Git",
        "Figma"
      ],
      keyFeatures: [
        "Developed production gameplay features in Unity (C#) spanning lifecycle state management, UI flows, and core game logic",
        "Architected modular component-based gameplay systems, reducing coupling and supporting independent feature iteration",
        "Owned feature development across Git branches, driving changes through pull requests and resolving merge conflicts",
        "Performed QA validation and regression testing on merge candidates, preventing unstable builds from reaching production"
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
        "Swagger (OpenAPI)"
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
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Back button */}
        <Link 
          to="/#work" 
          className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to work
        </Link>

        {/* Project header */}
        <p className="text-sm text-neutral-500 mb-2">{project.client}</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
          {project.title}
        </h1>

        {/* Project image */}
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full rounded-2xl mb-12 border border-neutral-200"
          />
        )}

        {/* Project content */}
        {content && (
          <div className="space-y-12">
            {/* Context/Problem Statement - only for client projects */}
            {content.context && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.context}
                </p>
              </section>
            )}

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{content.context ? "The Solution" : "Overview"}</h2>
              <p className="text-neutral-700 leading-relaxed">
                {content.overview}
              </p>
              {(content.role || content.duration || content.team) && (
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-600">
                  {content.role && <div><span className="font-medium">Role:</span> {content.role}</div>}
                  {content.duration && <div><span className="font-medium">Duration:</span> {content.duration}</div>}
                  {content.team && <div><span className="font-medium">Team:</span> {content.team}</div>}
                </div>
              )}
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {content.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Key Features */}
            {content.keyFeatures && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Features & Contributions</h2>
                <ul className="space-y-3">
                  {content.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span className="text-neutral-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technical Highlights */}
            {content.technicalHighlights && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
                <ul className="space-y-3">
                  {content.technicalHighlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span className="text-neutral-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges */}
            {content.challenges && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
                <ul className="space-y-3">
                  {content.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-neutral-400 mt-1">•</span>
                      <span className="text-neutral-700 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Impact */}
            {content.impact && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Impact</h2>
                <p className="text-neutral-700 leading-relaxed">{content.impact}</p>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}