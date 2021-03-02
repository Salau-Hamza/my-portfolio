import React, { useState, useEffect } from "react"
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
                    title,
                    data,
                    place,
                    description,
                    projectType,
                    link,
                    tags
                }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, []);
    return (
        <main className="min-h-screen">
            <section className="container mx-auto px-4 md:px-12">
                <h1 className="text-5xl flex justify-center cursive pt-4">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-4">Welcome to my Project Page</h2>
                <section className="flex flex-wrap -mx-1 lg:-mx-6">
                    {projectData && projectData.map((project, index) => (
                    <div className="my-1 px-6 w-full md:w-1/2 lg:my-4 lg:px-6 py-6 lg:w-1/3">
                    <article className="rounded-lg shadow-xl bg-white p-6">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700"><a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View The Project{" "}
                                <span role="img" aria-label="right pointer"></span>
                            </a>
                        </div>
                    </article>
                    </div>
                    ))}
                </section>
            </section>
        </main>
    )
}