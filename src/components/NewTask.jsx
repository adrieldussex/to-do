import { useState } from "react"

export default function NewTask({addTask}) {
    const [title, setTitle] = useState('')

    const handleTask = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTask(title)
            setTitle('')
        }
    }

    return (
        <div className="sticky top-2">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="border border-slate-500/50 border-solid p-3 rounded-full"></span>
                </div>
                <input
                    type="text"
                    className="bg-slate-200 focus:shadow-md focus:shadow-slate-900/10 pl-12 w-full py-4 rounded-lg outline-none transition-all duration-300 ease-in-out text-slate-500"
                    placeholder="Crear nueva tarea"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    onKeyDown={e => handleTask(e)}
                />
            </div>
        </div>
    )
}