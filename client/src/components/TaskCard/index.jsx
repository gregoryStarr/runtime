import { observer } from "mobx-react";
import { Draggable } from "react-beautiful-dnd";
import "./index.scss";
const TaskCard = observer(({ task, index }) => (
  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
    {(provided, snapshot) => (
      <div
        className="kanban-task gradient"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <h3>{task.name}</h3>
        <h5>ID:{task.id}</h5>
      </div>
    )}
  </Draggable>
));

export { TaskCard };
