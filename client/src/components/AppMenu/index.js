import { action } from "mobx"
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Button, Menu } from "semantic-ui-react"
import {TaskStoreContext} from "stores/TaskStoreContext";
import './index.scss'

const AppMenu = observer((props)=>{
    const taskStore = useContext(TaskStoreContext);
   return (
    <div className="menu-container">
        <Menu className="app-menu">
            <Menu.Item>
                <Button  onClick={ action( (e) => { 
                    const task = taskStore.addTask(); 
                    taskStore.CURRENTTASK=task
                    taskStore.showModal(true)
                }) }>
                    Create Task
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button  onClick={ action( (e) => { 
                    debugger
                }) }>
                    Debug Now
                </Button>
            </Menu.Item>
        </Menu>
    </div>
   )
});

export {AppMenu}