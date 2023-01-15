import { action } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { TaskStoreContext } from 'stores/TaskStoreContext'
import './index.scss'

const AppMenu = observer((props) => {
    const taskStore = useContext(TaskStoreContext)
    const [activeItem, setActiveItem] = useState('')
    return (
        <div className="menu-container">
            <Menu className="app-menu" color="black" inverted>
                <Menu.Item>
                    <Button
                        onClick={action((e) => {
                            const task = taskStore.addTask()
                            taskStore.CURRENTTASK = task
                            taskStore.showModal(true)
                        })}
                    >
                        Create Task
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button
                         onClick={action((e) => {
                            const task = taskStore.addTask()
                            taskStore.CURRENTTASK = task
                            taskStore.showModal(true)
                        })}
                    >
                        Debug Now
                    </Button>
                </Menu.Item>
                <Menu.Item
                    name="import"
                    active={activeItem === 'import'}
                    onClick={action(() => {
                        taskStore.getDefaultData()
                    })}
                >
                    Import Test Data
                </Menu.Item>
            </Menu>
        </div>
    )
})

export { AppMenu }
