export default function Button({ children, onClick, type }) {
  
  let btnClass = `text-white  
    font-medium rounded-lg text-sm px-5 py-2.5 
    me-2 mb-2 bg-blue-500 
    focus:outline-none `;
    if(type==='submit'){
      btnClass += ' bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
    }
    
  return (
    <button type="button" className={`btn ${btnClass}`} onClick={onClick}>
      {children}
    </button>
  );
}
