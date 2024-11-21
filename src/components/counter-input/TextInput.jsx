import { useState } from "react"

function TextInput() {
    //declarar ese estado

    const [text, setText] = useState('')

    return (
        <div>
            <input
                className="border mt-2"
                type="text"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                placeholder="escribe algo aqui"
            />
            <p>{text}</p>
        </div>
    )
}

export default TextInput