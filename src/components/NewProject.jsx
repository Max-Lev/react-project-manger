import { useState, useRef, useEffect } from "react";
import Input from "./Input.jsx";
export default function NewProject({ submitHandler,
    cancelHandler,deleteHandler,pls,
     ...props }) {
  const { projectNameRef, projectDescriptionRef, projectDateRef } = props;

  useEffect(() => {
    // console.log(props);
  });

  // State to force re-renders
  const [, forceUpdate] = useState({});

  // Function to trigger re-render
  const triggerUpdate = () => {
    forceUpdate({});
  };

  const validateBtn = () => {
    // Check if refs exist and have values
    if (
      !projectNameRef?.current ||
      !projectDescriptionRef?.current ||
      !projectDateRef?.current
    ) {
      return true; // Disable if refs don't exist
    }

    const isEmpty =
      projectNameRef.current.value.trim() === "" ||
      projectDescriptionRef.current.value.trim() === "" ||
      projectDateRef.current.value === "";

    return isEmpty; // Return true to disable, false to enable
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(e);
  };

  return (
    <section className="w-[35rem] mt-16 self-center">
        {pls}
      <menu className="flex items-center justify-end gap-4 my-4">
        {!props.isEditMode && (
          <>
            <li>
              <button
                onClick={cancelHandler}
                className="text-stone-800 hover:text-stone-950"
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                disabled={validateBtn()}
                type="submit"
                onClick={onSubmit}
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 
              hover:bg-stone-950 disabled:bg-stone-600 disabled:cursor-not-allowed 
              disabled:text-stone-400"
              >
                Save
              </button>
            </li>
          </>
        )}
        {
            props.isEditMode &&(
                <li>
                <button
                  onClick={deleteHandler}
                  className="text-stone-800 hover:text-stone-950"
                >
                  Delete
                </button>
              </li>
            )
        }
      </menu>
      <form onSubmit={onSubmit}>
        <Input
          onChange={triggerUpdate}
          id="project-title"
          label="Title"
          ref={props.projectNameRef}
        />
        <Input
          onChange={triggerUpdate}
          id="description"
          label="Description"
          textarea
          ref={props.projectDescriptionRef}
        />
        <Input
          onChange={triggerUpdate}
          type="date"
          id="due-date"
          label="Due Date"
          ref={props.projectDateRef}
        />
      </form>
    </section>
  );
}
