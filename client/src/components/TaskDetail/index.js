import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Form, Button, Input, Checkbox, Label, Icon } from "semantic-ui-react";
import TaskStoreContext from "stores/TaskStoreContext";

const TaskDetail = observer((props) => {
  const { task } = props;

  return (
    <div className="task-detail">
      {
                !task && <div> <Icon name="alarm" /> No task selected! </div>
            }
      {task && (
        <Form action="">
          <Label value="Name">
            <Input
              type="text"
              name="taskName"
              value={task?.name}
            />
            <Checkbox></Checkbox>
            <Icon name="alarm" />
            <Button />
          </Label>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" value={task?.name} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Author" value={task?.author} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Difficulty"
              value={task?.difficutly}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Status" value={task?.status} />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </div>
  );
});
export { TaskDetail };
