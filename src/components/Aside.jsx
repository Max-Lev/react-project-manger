export default function Aside({ children }) {
  return (
    <>
      <aside
        id="default-sidebar"
        className="relative h-screen top-0 left-0 z-40 
        w-64 transition-transform 
        -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-start h-full px-3 py-4 
        overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {children}
        </div>
      </aside>
    </>
  );
}
