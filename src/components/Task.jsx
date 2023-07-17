export default function Task({task, handleSetComplete, handleDelete}) {

    const { id, title, completed } = task

    return (
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white text-slate-500">
            <div className="flex items-center">
                {
                    completed
                    ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-slate-500 p-1 rounded-full cursor-pointer">
                            <img src='/check-icon.svg' alt='Check Icon' className="h-4 w-4"/>
                        </div>
                    ) : (
                    <span onClick={() => handleSetComplete(id)} className="bg-slate-200 rounded-full p-3 cursor-pointer"/>
                    )
                }
                <p className={"pl-3 " + (completed && "line-through")}>
                    {title}
                </p>
            </div>
            <img
            onClick={() => handleDelete(id)}
            src="/close-icon.svg"
            alt=""
            className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"/>
        </div>
    )
}