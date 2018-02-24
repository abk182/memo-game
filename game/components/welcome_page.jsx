import React from 'react'
import { Link } from 'react-router-dom'

export class WelcomePage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Link to = {'/table'}>
                    <button>Start!</button>
                </Link>
            </div>
        )
    }
}