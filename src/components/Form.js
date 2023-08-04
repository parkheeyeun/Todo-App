import { useState } from "react";

export default function Form({ addTask }) {
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        addTask(name)
        setName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full mb-2"
                autoComplete="off"
            />
            <button
                type="submit"
                className="text-lg border rounded p-2 bg-[#FBA1B7] disabled:opacity-50"
                disabled={!name.trim()}
            >추가하기</button>
        </form>
    )
}