const FiltersContainer = ({children}) => {
    return (
        <div className="flex items-center justify-between p-4 text-slate-600">
            {children}
        </div>
    )
}

const ButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
}

const FilterButton = ({action, active, filter}) => {
    return (
        <button onClick={action} className={`hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out `
            + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-slate-500')}
        >
            {filter}
        </button>
    )
}

export { FiltersContainer, ButtonContainer, FilterButton }

