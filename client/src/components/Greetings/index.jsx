import {useState} from 'react'
import { observer } from "mobx-react-lite";
import { Draggable } from "react-beautiful-dnd";
import { useContext } from "react";
import {TaskStoreContext} from "stores/TaskStoreContext";
import { action } from "mobx";
import { Button,Header, Card, Divider, Icon, Image,Segment,Grid } from 'semantic-ui-react';
import './index.scss'
const Greeting = observer(({ task, index }) => {
  const taskStore = useContext(TaskStoreContext);
 const [user, setUser] = useState(null)
  return (
    <div className='greeting' >
        <Segment placeholder>
            <Segment ><Header>Please pick a User to continue...</Header></Segment>
            <Segment>
            <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                <Header icon>
                    <Icon name='search' onClick={action(()=>{
                        setUser(taskStore.users.filter( (user) => user?.firstName==='Greg')[0])
                        taskStore.CURRENTUSER = user
                    })
                            
                        }/>
                    Greg
                </Header>
                </Grid.Column>

                <Grid.Column>
                <Header icon>
                    <Icon size="massive" name='world'  onClick={action(()=>{
                        setUser(taskStore.users.filter((user) => user.firstName==='admin')[0])
                        taskStore.CURRENTUSER = user
                        alert(JSON.stringify(taskStore.CURRENTUSER.firstName))
                    }
                        
                        )
                        }/>
                    Admin
                </Header>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Segment>
        </Segment>
    </div>
  )
});

export default Greeting ;
