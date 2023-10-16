import { MdDeleteOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <aside className="notes__Sidebar">
      <h1 className="font-bold text-xl mb-2">Anotações</h1>
      <button type="button" className="notes__Add" onClick={onAddNote}>
        <span className="hidden md:block">Nova Nota</span>
        <AiOutlinePlus size={20} className="block md:hidden" />
      </button>
      <ul className="notes__List hidden md:block">
        {sortedNotes.map(({ id, title, body, lastModified }) => (
          <li
            key={id}
            className={`notes__List-Item ${
              id === activeNote && "notes__List-Item--selected"
            }`}
            onClick={() => setActiveNote(id)}
          >
            <div className="notes__Item-Title">
              <strong>{title}</strong>
              <button onClick={() => onDeleteNote(id)}>
                <MdDeleteOutline size={20} className="hover:text-red-600" />
              </button>
            </div>
            <p className="notes__Item-Body">
              {body && body.substring(0, 24) + "..."}
            </p>
            <small className="notes__Item-Update">{lastModified}</small>
          </li>
        ))}
      </ul>
    </aside>
  );
}
