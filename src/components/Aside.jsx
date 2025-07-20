import { useEffect } from "react";
export default function Aside({ children, projects, selectedProject }) {
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <>
      <aside
        className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        
          <div className="px-4 py-2 text-xs md:text-base rounded-md ">
            {children}
          </div>
        
        <div>
          {projects && (
            <ol className="text-cyan-500">
              {projects.map((project, index) => {
                return (
                  <li key={index}>
                    {
                      <button onClick={() => selectedProject(project, index)}>{
                        project.projectName && project.projectName.length > 0 && (
                          <span className="pr-4">{project.projectName}</span>
                        )}
                      </button>
                    }
                  </li>
                );
              })}
            </ol>
          )}
        </div>
    </aside >
    </>
  );
}
