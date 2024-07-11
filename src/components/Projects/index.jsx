import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // get projects based on item
    setProjects(projectsData);
  }, []);

  return (
    <div>
      {/* projects nav */}
      <nav className="max-w-xl mx-auto mb-12">
        <ul className="flex flex-col items-center text-white md:flex-row justify-evenly"></ul>
      </nav>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
