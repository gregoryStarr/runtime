import { Button, Card, Container, Header, Label, Segment } from "semantic-ui-react"
import './index.scss'
import { action } from "mobx"
import { useContext } from "react"
import { TaskStoreContext } from "stores/TaskStoreContext"
const NoteCard = ({task, key}) => {
    const taskStore = useContext(TaskStoreContext);
    return (
        <Segment className="note-card" key={key}>
                <Header className="note-header">{task.name}
                 <Button icon="edit" onClick={action(()=>{taskStore.currentTask=task})}/>
                </Header>
                <section>
                    <p>{ Object.keys(task)
                        .sort()
                        .map((key)=> (
                            <div>
                                <Label>
                                {key.toUpperCase()}:
                                </Label>{task[key]}
                                </div>)) }</p>
                </section>
        </Segment>
    )
    
}

export {NoteCard}