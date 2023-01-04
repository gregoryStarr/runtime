import { Button, Card, Icon, Header, Label, Segment } from "semantic-ui-react"
import './index.scss'
import { action } from "mobx"
import { useContext } from "react"
import { TaskStoreContext } from "stores/TaskStoreContext"
import { observer } from "mobx-react-lite"
const NoteCard = observer(({task}) => {
    let count = 0
    const key = task.id 
    const taskStore = useContext(TaskStoreContext);
    return (
        <Segment className="note-card" key={`-${key}-${count++}`}>
                <Header className="note-header">{task.name}
                <div>
                    <Icon name="close" color="orange" onClick={action(()=>{taskStore.deleteTask(task)})}/>
                    { task.status !== "done" && <Icon color="olive"  name="archive square outline" onClick={action(()=>{task.status='done'})}/> }
                    { task.status === "todo" && <Icon  name="share square outline" onClick={action(()=>{task.status=''})}/> }
                    { task.status ==="" && <Icon   name="play" onClick={action(()=>{task.status='todo'})}/> }
                    <Icon name="edit" onClick={action(()=>{taskStore.currentTask=task})}/>
                </div>
                </Header>
                <section>
                    <div>{ Object.keys(task)
                        .sort()
                        .map((key)=> (
                            <div key={`${key}-${count++}`}>
                                <Label>
                                {key.toUpperCase()}:
                                </Label>{task[key]}
                                </div>)) }</div>
                </section>
        </Segment>
    )
    
})

export {NoteCard}