import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "African Kingdom",
    description: "Epic cinematic movie trailer",
    updated: "2 hours ago",
  },
  {
    title: "Bible Animation",
    description: "Story of David and Goliath",
    updated: "Yesterday",
  },
  {
    title: "School Documentary",
    description: "Annual Graduation Ceremony",
    updated: "3 days ago",
  },
];

export default function RecentProjects() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold text-white">Recent Projects</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
