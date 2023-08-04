export default function Filter({ name, ispressed, setFilter }) {
    
    return (
        <button
        className={"border-2 border-black p-1 w-1/3 font-semibold " + (
            ispressed && "bg-black text-white"
        )}
            onClick={() => setFilter(name)}>
            {name}
        </button>
    )
}