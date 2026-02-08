import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from './ProjectsGrid';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

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
            className="w-full rounded-2xl mb-12"
          />
        )}

        {/* Project content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-neutral-600 mb-6">
            Detailed information about {project.title} will go here.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Technologies Used</h2>
          <p className="text-neutral-600 mb-6">
            Tech stack and tools will be listed here.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Key Features</h2>
          <p className="text-neutral-600 mb-6">
            Main features and accomplishments will be described here.
          </p>
        </div>
      </div>
    </div>
  );
}