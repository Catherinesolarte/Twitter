import { useState } from "react"

function Counter() {
    // declarar un estado
    const [pepe, setPepe] = useState(0)

    return (
        <div>
            <h1>Total: {pepe}</h1>
            <button
                className="border p-2 mt-2"
                onClick={() => { setPepe(pepe + 1) }}
            >Incrementar
            </button>
        </div>
    )
}

export default Counter