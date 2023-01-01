import { observer } from "mobx-react-lite";
import { Draggable } from "react-beautiful-dnd";
import "./index.scss";
import { useContext } from "react";
import {TaskStoreContext} from "stores/TaskStoreContext";import { action } from "mobx";
;

const TaskCard = observer(({ task, index }) => {
  const taskStore = useContext(TaskStoreContext);
  
  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
        onClick={action(() => {
          taskStore.currentTask=task;
          taskStore.showModal(true)
        })}
          className="kanban-task gradient"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <a>
            {task.name}
          </a>
          <h6>ID:{task.id}</h6>
        </div>
      )}
    </Draggable>
  );
});

export { TaskCard };
