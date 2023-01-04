import {useState} from 'react'
import { observer } from "mobx-react-lite";
import { Draggable } from "react-beautiful-dnd";
import "./index.scss";
import { useContext } from "react";
import {TaskStoreContext} from "stores/TaskStoreContext";import { action } from "mobx";
;

const TaskCard = observer(({ task, index }) => {
  const taskStore = useContext(TaskStoreContext);
  const [selected, setSelected] = useState(task.selected)
  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          onClick={action(() => {
          task.selected=(!task.selected)
          taskStore.CURRENTTASK=task;
          taskStore.showModal(true)
        })}
          className={`kanban-task gradient ${selected && 'selected'}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <a>
            {task.name}
          </a>
          <h6>Status:{`${task.status}`}</h6>
        </div>
      )}
    </Draggable>
  );
});

export { TaskCard };
