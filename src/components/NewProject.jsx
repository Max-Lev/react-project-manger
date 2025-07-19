import { useState,useRef } from "react";
export default function NewProject({submitHandler,...props}) {

    // const projectNameRef = useRef();
    // const projectDescriptionRef = useRef();
    // const projectDateRef = useRef();

    const [projects, setProjects] = useState([
        { projectName: "", projectDescription: "", projectDate: "" }
      ]);

      const onSubmit = (e) => {
        e.preventDefault();
        console.log(props.projectNameRef.current.value);
        console.log(props.projectDescriptionRef.current.value);
        console.log(props.projectDateRef.current.value);
        // submitHandler(props.projectNameRef.current.value,props.projectDescriptionRef.current.value,props.projectDateRef.current.value);
        console.log(submitHandler)
        submitHandler(e);
        debugger
      }


  return (
    <div className="flex flex-col w-96 max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex flex-col justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">New Project</h2>
        <div className="flex gap-2">
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 
                        bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 
                        focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 
                        transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 
                        bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 
                        focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 
                        transition-colors"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={onSubmit}>
        {/* Project Name */}
        <div>
          <label
            htmlFor="project-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Name
          </label>
          <input
            ref={props.projectNameRef}
            type="text"
            id="project-name"
            name="project-name"
            className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors"
            placeholder="Enter project name..."
          />
        </div>

        {/* Project Description */}
        <div>
          <label
            htmlFor="project-description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Description
          </label>
          <textarea
          ref={props.projectDescriptionRef}
            id="project-description"
            name="project-description"
            rows="4"
            className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors resize-vertical"
            placeholder="Describe your project..."
          />
        </div>

        {/* Due Date */}
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Due Date
          </label>
          <input
          ref={props.projectDateRef}
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors"
          />
        </div>
      </form>
    </div>
  );
}
