import Aside from "./components/Aside.jsx";
import Button from "./components/Button.jsx";
import NoProject from "./components/NoProject.jsx";
import NewProject from "./components/NewProject.jsx";
import { useState, useRef, useEffect } from "react";
function App() {
  const projectNameRef = useRef();
  const projectDescriptionRef = useRef();
  const projectDateRef = useRef();
  const projectIndex = useRef();

  const [projects, setProjects] = useState([
    { projectName: null, projectDescription: null, projectDate: null },
  ]);
  const [showAddProject, setShowAddProject] = useState(true);
  const [newAddProject, setNewAddProject] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  useEffect(() => {
    if (showAddProject && selectedProjectData) {
      if (projectNameRef.current) {
        projectNameRef.current.value = selectedProjectData.projectName || "";
        projectDescriptionRef.current.value =
          selectedProjectData.projectDescription || "";
        projectDateRef.current.value = selectedProjectData.projectDate || "";
      }
    }
  }, [showAddProject, selectedProjectData]);

  useEffect(() => {
    // if (newAddProject) {
    if (newAddProject && projectIndex.current===-1) {
      projectNameRef.current.value = '';
      projectDescriptionRef.current.value = '';
      projectDateRef.current.value = '';
    }
  // }, [newAddProject]);
  }, [newAddProject,projectIndex.current]);

  const addProjectHandler = () => {
    console.log(projectIndex.current,newAddProject)
    projectIndex.current = -1;
    setShowAddProject(true);
    setNewAddProject(true);
  };

  const submitHandler = (e) => {
    //UPDATE EXISTING
    if (selectedProjectData !== null && projectIndex.current !== -1) {
      updateExistingProj();
    } else {
      addNewProj();
    }
    setNewAddProject(false);
  };

  const updateExistingProj = () => {
    let _proj = projects[projectIndex.current];
    _proj = {
      ..._proj,
      ...{
        projectName: projectNameRef.current.value,
        projectDescription: projectDescriptionRef.current.value,
        projectDate: projectDateRef.current.value,
      },
    };

    setProjects((prev) =>
      prev.map((project, index) =>
        index === projectIndex.current ? _proj : project
      )
    );
  }

  const addNewProj = () => {
    // ADD NEW
    setProjects((prev) => [
      ...prev,
      {
        projectName: projectNameRef.current.value,
        projectDescription: projectDescriptionRef.current.value,
        projectDate: projectDateRef.current.value,
      },
    ]);
    setShowAddProject(false);
  }

  const selectedProject = (project, index) => {
    console.log(project, index);
    const _proj = projects[index];
    projectIndex.current = index;
    setSelectedProjectData(_proj); // Delay setting ref values
    setShowAddProject(true); // Trigger form render
    setNewAddProject(false);
  };

  return (
    <>
      <section className="container flex">
        <Aside projects={projects} selectedProject={selectedProject}>
          <Button onClick={addProjectHandler} type="submit">
            Add Project
          </Button>
        </Aside>
        <div className="content">
          <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
          {!showAddProject && <NoProject />}
          {showAddProject && (
            <NewProject
              projectNameRef={projectNameRef}
              projectDescriptionRef={projectDescriptionRef}
              projectDateRef={projectDateRef}
              submitHandler={(e) => submitHandler(e)}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default App;
