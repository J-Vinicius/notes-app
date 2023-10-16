import moment from "moment";

export default function Main({ activeNote, onUpdateNote }) {
  moment.locale("pt-br");

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: moment().format("LLL"),
    });
  };

  if (!activeNote) {
    return (
      <div className="w-full flex justify-center items-center">
        <p className="">Nenhuma nota</p>
      </div>
    );
  }

  return (
    <section className="notes__Preview">
      <input
        className="notes__Title"
        type="text"
        id="title"
        placeholder="Titulo..."
        value={activeNote.title}
        onChange={(e) => onEditField("title", e.target.value)}
        autoFocus
      />
      <textarea
        className="notes__Body"
        placeholder="Escreva aqui..."
        id="body"
        value={activeNote.body}
        onChange={(e) => onEditField("body", e.target.value)}
      />
    </section>
  );
}
