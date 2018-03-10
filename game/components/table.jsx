import React from 'react'
import { Link } from 'react-router-dom'

import { Engine } from "../engine/engine";
import { Card } from "./card.jsx";

export class GameTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            playCards:[],
            openCards:[],
            selectedCard:{},
            counter:0,
            score:0
        }
    }
    componentWillMount(){
        let engine = new Engine()
        this.setState({playCards:engine.generateCards()})
    }
    calcScore(state){
        let new_score
        if (state){
            new_score = this.state.score + (this.state.playCards.length/2)*42
            let openCards = this.state.openCards
            openCards.push(this.state.selectedCard.state.value)
            this.setState({selectedCard:{},counter:0,score:new_score,openCards:openCards})
        } else {
            new_score = this.state.score - this.state.openCards.length*42
            this.setState({selectedCard:{},counter:0,score:new_score})
        }
    }
    selectCard(card){
        if(!card.state.is_open && !card.state.is_active && card.props.counter<2) {
            card.setState({is_active: true})
            this.setState({counter:this.state.counter+1})
            if (!this.state.selectedCard.hasOwnProperty('state')){
                this.setState({selectedCard:card})
            } else {
                setTimeout(function () {
                    let state = (card.state.value == this.state.selectedCard.state.value) ? true : false
                    this.state.selectedCard.setState({is_open:state})
                    card.setState({is_open:state})
                    this.calcScore(state);
                }.bind(this),500)
            }
        }
    }
    render(){
        if(this.state.openCards.length == this.state.playCards.length/2){
            return(
                <div>
                    <div className={'score'}>
                        <p >DONE!</p>
                    </div>
                    <div className={'score'} data-tid="Menu-scores">
                        <p>Score: {this.state.score}</p>
                    </div>
                    <div onClick={()=>location.reload()} className={'score'} data-tid="Menu-newGame">
                        <p>
                            <a>restart</a>
                        </p>
                    </div>
                </div>
            )
        }else{
            return(
                <div className='table' data-tid="Deck">
                    {
                        this.state.playCards.map(card=>(
                            <Card key={card.id}
                                  card_id={card.id}
                                  card_val={card.value}
                                  counter={this.state.counter}
                                  handler={obj=>this.selectCard(obj)}/>
                        ))
                    }
                    <div className={'score'} data-tid="Menu-scores">
                        <p>Score: {this.state.score}</p>
                    </div>
                    <div onClick={()=>location.reload()} className={'score'} data-tid="Menu-newGame">
                        <p>
                            <a>restart</a>
                        </p>
                    </div>
                </div>
            )
        }
    }
}



