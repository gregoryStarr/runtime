import { observer } from 'mobx-react-lite'
import { Droppable } from 'react-beautiful-dnd'
import { TaskCard } from '../TaskCard'
import './index.scss'
const KanbanColumn = observer(({ status, tasks }) => (
    <div className="kanban-column">
        <h2>
            {status.toUpperCase()}
            <i>{tasks.filter((task) => task.status === status).length}</i>
        </h2>
        <Droppable droppableId={status}>
            {(provided, snapshot) => (
                <div
                    className="droppable-column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {tasks
                        .filter((task) => task.status === status)
                        .map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index} />
                        ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
))

export { KanbanColumn }
