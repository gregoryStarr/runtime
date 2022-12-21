import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { MultiUpload } from './components/multi-upload';



function App() {
    const [filesSelected, setFilesSelected] = useState(false)


    // Handlers
    onFilesHandler = (files) => {

    }

    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        App Header <
        /header>

        <
        div >
        <
        section >
        content area

        upload files <
        MultiUpload onFiles = {}
        /> <
        /section> <
        /div> <
        /div>
    );
}

export default App;