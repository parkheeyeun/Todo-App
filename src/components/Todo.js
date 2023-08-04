import { useState } from "react";

export default function Todo({ id, name, completed, editTask, deleteTask, toggleCompleted }) {

    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        editTask(id, newName)

        setEditing(false)
        setNewName("")
    }

    const viewTemplate = (
        <>
            <div className="flex items-center justify-between mb-2">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="peer hidden"
                        checked={completed}
                        onChange={() => toggleCompleted(id)} />
                    <span className="peer-checked:line-through">{name}</span>
                </label>

                <div>
                    <button
                        onClick={() => setEditing(true)}
                        className="w-[52px] p-2 rounded bg-[#ff004f] text-white mr-2">
                        수정</button>
                    <button
                        onClick={() => deleteTask(id)}
                        className="w-[52px] p-2 rounded bg-[#00b9fb] text-white">
                        삭제</button>
                </div>
            </div>
        </>
    )

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-2">
                <input
                    type="text"
                    value={newName || name}
                    onChange={(e) => setNewName(e.target.value)} />

                    <button
                        className="w-1/2 rounded p-2 bg-[#ff004f] text-white mr-2"
                        onClick={() => setEditing(false)}>
                        취소</button>
                    <button
                        type="submit"
                        className="w-1/2 rounded p-2 bg-[#00b9fb] text-white disabled:opacity-50"
                        disabled={!newName.trim()}>
                        저장</button>
            </div>
        </form>
    )

    return (
        <li className="">
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    )
}