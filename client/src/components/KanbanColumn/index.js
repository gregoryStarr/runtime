import { observer } from "mobx-react";
import { Droppable } from "react-beautiful-dnd";
import { TaskCard } from "../TaskCard";
import "./index.scss";
const KanbanColumn = observer(({ status, tasks }) => (
  <Droppable droppableId={status}>
    {(provided, snapshot) => (
      <div
        className="kanban-column"
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <h2>
          {status.toUpperCase()}
          <i>{tasks.filter((task) => task.status === status).length}</i>
        </h2>
        {tasks
          .filter((task) => task.status === status)
          .map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
));

export { KanbanColumn };
