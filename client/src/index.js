import { Provider } from 'mobx-react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import { App } from './App'
import './index.scss'
import { TaskStore } from './stores/TaskStore'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider taskStore={new TaskStore()}>
        <App />
    </Provider>
)
