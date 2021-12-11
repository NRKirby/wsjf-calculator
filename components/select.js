

export default function Select({ label, setValue, optionArray }) {
    return (
        <div className="w-40 m-4">
            <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                id={label.toLowerCase()}
                name={label.toLowerCase()}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="Please select"
                onChange={(e) => setValue(e.target.value)}
            >
                <option value={null}>Please select</option>
                {optionArray.map(opt => <option key={opt.value} value={opt.value}>{opt.name}</option>)}
            </select>
        </div>
    )
}