import { useContext } from 'react'
import './index.scss'
import { TaskStoreContext } from 'stores/TaskStoreContext'
import { NoteCard } from 'components/NoteCard'

const NoteBoard = () => {
    const taskStore = useContext(TaskStoreContext)
    return(
        <div className="note-board">
            { taskStore.tasks.map( task => <NoteCard task={task} key={task.id}/>) }
        </div>
    )
}

export {NoteBoard}