import Aside from "./components/Aside.jsx";
import Button from "./components/Button.jsx";
import NoProject from "./components/NoProject.jsx";
import NewProject from "./components/NewProject.jsx";
import { useState, useRef } from "react";
function App() {
  const projectNameRef = useRef();
  const projectDescriptionRef = useRef();
  const projectDateRef = useRef();

  const [projects, setProjects] = useState([
    { projectName: "", projectDescription: "", projectDate: "" }
  ]);
  const [showAddProject, setShowAddProject] = useState(true);

  const addProjectHandler = () => {
    setShowAddProject(true);
  };

  const submitHandler = (e) => {
    console.log(e);
    console.log(projectNameRef.current.value);
    console.log(projectDescriptionRef.current.value);
    console.log(projectDateRef.current.value);
  }

  return (
    <>
      <section className="container flex">
        <Aside>
          <Button onClick={addProjectHandler} type="submit">
            Add Project
          </Button>
        </Aside>
        <div className="content">
          <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
          {!showAddProject && <NoProject />}
          {
          showAddProject && <NewProject  projectNameRef={projectNameRef} 
          projectDescriptionRef={projectDescriptionRef} 
          projectDateRef={projectDateRef}
          onSubmit={(e)=>submitHandler(e)} />
          }
        </div>
      </section>
    </>
  );
}

export default App;
