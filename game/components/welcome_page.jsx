import React from 'react'
import { Link } from 'react-router-dom'

export class WelcomePage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'start'}>
                <Link to = {'/table'}>
                    <button className={'start-btn'}>Start!</button>
                </Link>
            </div>
        )
    }
}