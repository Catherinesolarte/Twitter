// TwitterCard.js
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function TwitterCard({ author, content }) {
  // Estado para gestionar si el tweet está marcado como favorito
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    // Alternar el estado de "like"
    setLiked(!liked);
  };

  return (
    <div className="border p-4 rounded m-2 flex justify-between items-center bg-white">
      {/* Contenido del tweet */}
      <div>
        <h3 className="font-bold text-lg">{author}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
      {/* Botón de "like" */}
      <button onClick={handleClick}>
        {liked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-500" />
        )}
      </button>
    </div>
  );
}

export default TwitterCard;
