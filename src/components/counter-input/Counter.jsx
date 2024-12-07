// Counter.js
import { useState } from "react";

function Counter() {
    // Estado para almacenar el total
    const [total, setTotal] = useState(0);

    return (
        <div className="p-4 bg-gray-100 text-center min-h-[200px] flex flex-col items-center justify-center">
            {/* Título mostrando el total */}
            <h1 className="text-2xl font-bold text-gray-700">
                Total: <span className="text-blue-500">{total}</span>
            </h1>

            {/* Botón para incrementar el contador */}
            <button
                className="bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 transition duration-300 ease-in-out"
                onClick={() => setTotal(total + 1)}
            >
                Incrementar
            </button>
        </div>
    );
}

export default Counter;

