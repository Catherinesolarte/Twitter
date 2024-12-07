// TextInput.js
import { useState } from "react";

function TextInput() {
  // Estado para almacenar el texto ingresado
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      {/* Entrada de texto */}
      <input
        className="border p-2 w-full rounded"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo aquí"
      />
      {/* Mostrar el texto ingresado */}
      <p className="mt-2 text-gray-700">{text}</p>
    </div>
  );
}

export default TextInput;
