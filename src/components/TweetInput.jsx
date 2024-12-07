// TweetInput.js
import { useState } from "react";

function TweetInput({ sendTweet }) {
  // Estado para almacenar el texto del nuevo tweet
  const [newTweet, setNewTweet] = useState("");

  const handleClick = () => {
    // Validar que no se envíen tweets vacíos
    if (newTweet.trim() === "") {
      alert("Debes escribir algo");
      return;
    }
    // Enviar el tweet y limpiar el campo
    sendTweet(newTweet);
    setNewTweet("");
  };

  return (
    <div className="m-4">
      {/* Entrada de tweet */}
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Tweetea algo"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
      />
      {/* Botón para enviar tweet */}
      <button
        className="bg-blue-500 text-white w-full p-2 rounded mt-2 hover:bg-blue-700 transition"
        onClick={handleClick}
      >
        Enviar
      </button>
    </div>
  );
}

export default TweetInput;
