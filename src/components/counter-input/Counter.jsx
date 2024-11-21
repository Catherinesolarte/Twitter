import { useState } from "react"

function Counter() {
    // declarar un estado
    const [total, setTotal] = useState(0)

    return (
        <div>
            <h1>Total: {total}</h1>
            <button
                className="border p-2 mt-2"
                onClick={() => { setTotal(total + 1) }}
            >Incrementar
            </button>
        </div>
    )
}

export default Counter