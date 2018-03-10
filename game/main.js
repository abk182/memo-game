import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { GameTable } from "./components/table.jsx"
import { WelcomePage } from './components/welcome_page.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BrowserRouter>
                <div className={'main'}>
                    <Route exact path="/" component={WelcomePage}/>
                    <Route path="/table" component={GameTable}/>
                    <Route path="/score" component={WelcomePage}/>
                </div>
            </BrowserRouter>
        )
    }
}

render(<App/>,document.getElementById('root'));