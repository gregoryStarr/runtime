import { Card, Container, Header, Segment } from "semantic-ui-react"
import './index.scss'
const NoteCard = ({task, key}) => {

    return (
        <Segment className="note-card" key={key}>
                <Header>{task.name}</Header>
                <Container>{task.description}</Container>
                <h6>{task.difficulty}</h6>
        </Segment>
    )
    
}

export {NoteCard}