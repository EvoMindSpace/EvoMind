"use client";

import { CategoryFilter } from "@/features/dashboard/components/category-filter";
import { ProjectCard } from "@/features/dashboard/components/project-card";
import { StartProjectOverlay } from "@/features/dashboard/components/start-project-overlay";
import projectsData from "@/features/dashboard/data/projects.json";
import { useState } from "react";
const categories = Array.from(
	new Set(projectsData.map((project) => project.category))
);

const Dashboard = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);

	const filteredProjects =
		selectedCategory === "All"
			? projectsData
			: projectsData.filter((project) => project.category === selectedCategory);
	return (
		<div className="space-y-12">
			<CategoryFilter
				categories={categories}
				selectedCategory={selectedCategory}
				onCategoryChange={setSelectedCategory}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{filteredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
			<StartProjectOverlay
				isOpen={isStartProjectOpen}
				onClose={() => setIsStartProjectOpen(false)}
			/>
		</div>
	);
};

export default Dashboard;
