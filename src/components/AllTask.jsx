import Filters from "./Filters";
import Task from "./Task";

export default function AllTask({tasks, handleSetComplete, handleDelete, handleClearComplete,activeFilter, showActiveTasks, showAllTasks, showCompletedTasks}) {
    return (
        <div className="flex flex-col mt-4 gap-2">
            {tasks.map(task => {
                return (
                    <Task
                    key={task.id}
                    task={task}
                    handleSetComplete={handleSetComplete}
                    handleDelete={handleDelete}/>
                )
            })}
            <Filters
             activeFilter={activeFilter}
             total={tasks.length}
             handleClearComplete={handleClearComplete}
             showActiveTasks={showActiveTasks}
             showAllTasks={showAllTasks}
             showCompletedTasks={showCompletedTasks}/>
        </div>
    )
}