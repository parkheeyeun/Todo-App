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
                <div class="inline-flex items-center">
                    <label
                        class="relative flex cursor-pointer items-center rounded-full p-3"
                        for={`check-${id}`}
                        data-ripple-dark="true">
                        <input
                            id={`check-${id}`}
                            type="checkbox"
                            checked={completed}
                            onChange={() => toggleCompleted(id)}
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </label>
                    <label
                        class={`mt-px cursor-pointer select-none font-light text-gray-700 ${
                            completed ? 'line-through' : ''
                          }`}
                        for={`check-${id}`}>
                        {name}
                    </label>
                </div>

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