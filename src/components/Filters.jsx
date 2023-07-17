import { ButtonContainer, FilterButton, FiltersContainer } from "./Filters.components";

export default function Filters({
    total,
    activeFilter,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
    handleClearComplete
}) {
    return (
        <FiltersContainer>
            <ButtonContainer>
                <FilterButton action={() => showAllTasks()} active={activeFilter} filter='All' />
                <FilterButton action={() => showActiveTasks()} active={activeFilter}  filter='Active'/>
                <FilterButton action={() => showCompletedTasks()} active={activeFilter}  filter='Completed'/>
            </ButtonContainer>
            <button className="" onClick={() => handleClearComplete()}>
                Clear Completed
            </button>
        </FiltersContainer>
    )
}