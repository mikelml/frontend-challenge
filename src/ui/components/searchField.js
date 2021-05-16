export default function SearchField ({handleKeyDown, onSetValue, value, submitSearch}) {
    return (
        <div className="flex">
            <input class="w-auto rounded p-2" onKeyDown={handleKeyDown} onChange={onSetValue}  value={value} type="text" placeholder="Search..."/>
            <button onClick={submitSearch} class="bg-white w-auto flex justify-end items-center p-2 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    )
}