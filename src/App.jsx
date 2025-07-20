import Aside from "./components/Aside.jsx";
import Button from "./components/Button.jsx";
import NoProject from "./components/NoProject.jsx";
import NewProject from "./components/NewProject.jsx";
import { useState, useRef, useEffect } from "react";

function App() {
  const projectNameRef = useRef();
  const projectDescriptionRef = useRef();
  const projectDateRef = useRef();

  // Use state instead of ref for projectIndex to trigger re-renders
  const [projectIndex, setProjectIndex] = useState(-1);

  // Initialize with empty array instead of array with null object
  const [projects, setProjects] = useState([
    {
      projectDate: "2025-07-11",
      projectDescription: "19",
      projectName: "React"
    }
  ]);
  const [showAddProject, setShowAddProject] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  // Clear form when starting to add new project
  const clearForm = () => {
    if (projectNameRef.current) {
      projectNameRef.current.value = '';
      projectDescriptionRef.current.value = '';
      projectDateRef.current.value = '';
    }
  };

  // Populate form when editing existing project
  const populateForm = (project) => {
    if (projectNameRef.current && project) {
      projectNameRef.current.value = project.projectName || "";
      projectDescriptionRef.current.value = project.projectDescription || "";
      projectDateRef.current.value = project.projectDate || "";
    }
  };

  // Handle form population based on mode
  useEffect(() => {
    if (showAddProject) {
      if (isEditMode && selectedProjectData) {
        populateForm(selectedProjectData);
      } else if (!isEditMode) {
        clearForm();
      }
    }
  }, [showAddProject, isEditMode, selectedProjectData]);

  const addProjectHandler = () => {
    setProjectIndex(-1);
    setSelectedProjectData(null);
    setIsEditMode(false);
    setShowAddProject(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      projectName: projectNameRef.current.value.trim(),
      projectDescription: projectDescriptionRef.current.value.trim(),
      projectDate: projectDateRef.current.value,
    };

    // Basic validation
    // if (!formData.projectName || !formData.projectDescription || !formData.projectDate) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    if (isEditMode && projectIndex !== -1) {
      updateExistingProj(formData);
    } else {
      addNewProj(formData);
    }

    // Reset state after submission
    setShowAddProject(false);
    setIsEditMode(false);
    setSelectedProjectData(null);
    setProjectIndex(-1);
  };

  const updateExistingProj = (formData) => {
    setProjects((prev) =>
      prev.map((project, index) =>
        index === projectIndex ? { ...project, ...formData } : project
      )
    );
  };

  const addNewProj = (formData) => {
    setProjects((prev) => [...prev, formData]);
  };

  const selectedProject = (project, index) => {
    console.log("Selected project:", project, "at index:", index);
    setProjectIndex(index);
    setSelectedProjectData(project);
    setIsEditMode(true);
    setShowAddProject(true);
    console.log({
      'isEditMode':isEditMode,
     'selectedProjectData': selectedProjectData,
     'projectIndex: ':projectIndex,
     'showAddProject':showAddProject
    })
  };

  const cancelHandler = () => {
    setShowAddProject(false);
    setIsEditMode(false);
    setSelectedProjectData(null);
    setProjectIndex(-1);
  };

  const deleteHandler = () => {
    setProjects((prev) => prev.filter((_, index) => index !== projectIndex));
    setShowAddProject(false);
    setIsEditMode(false);
    setSelectedProjectData(null);
    setProjectIndex(-1);
  }


  return (
    <>
      <main className="container flex h-screen my-8">
        <Aside projects={projects} selectedProject={selectedProject}>
          <Button onClick={addProjectHandler} type="submit">
            + Add Project
          </Button>
        </Aside>
        <div className="content items-center">
          {!showAddProject && <NoProject addProjectHandler={addProjectHandler} />}
          {showAddProject && (
            <NewProject
              projectNameRef={projectNameRef}
              projectDescriptionRef={projectDescriptionRef}
              projectDateRef={projectDateRef}
              submitHandler={submitHandler}
              cancelHandler={cancelHandler}
              isEditMode={isEditMode}
              deleteHandler = {deleteHandler}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;