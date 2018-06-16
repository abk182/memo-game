import React from 'react'
import { Link } from 'react-router-dom'

export class WelcomePage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={'start'} data-tid="NewGame-startGame">
                <Link to = {'/table'}>
                    <button className={'start-btn'}>!112!!!!</button>
                </Link>
            </div>
        )
    }
}