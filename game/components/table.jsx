import React from 'react'
import { Engine } from "../engine/engine";
import { Card } from "./card.jsx";
import { Score } from "./score.jsx";

export class GameTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            playCards:[],
            selectedCard:{},
            counter:0,
            score:0
        }
    }
    componentWillMount(){
        let engine = new Engine()
        this.setState({playCards:engine.generateCards()})
    }
    componentDidMount(){
    }
    selectCard(card){
        if(!card.state.is_open && !card.state.is_active && card.props.counter<2) {
            card.setState({is_active: true},)
            this.setState({counter:this.state.counter+1})
            if (!this.state.selectedCard.hasOwnProperty('state')){
                this.setState({selectedCard:card})
            } else {
                if (card.state.val == this.state.selectedCard.state.val){
                    this.state.selectedCard.setState({is_open:true})
                    card.setState({is_open:true})
                    this.setState({selectedCard:{},counter:0,score:this.state.score+1})
                } else {
                    setTimeout(function () {
                        this.state.selectedCard.setState({is_active:false})
                        card.setState({is_active:false})
                        this.setState({selectedCard:{},counter:0,score:this.state.score-1})
                    }.bind(this),500)
                }
            }
        }

    }
    render(){
        return(
            <div className='table'>
                {
                    this.state.playCards.map(card=>(
                        <Card key={card.id}
                              card_id={card.id}
                              card_val={card.value}
                              counter={this.state.counter}
                              handler={(obj)=>this.selectCard(obj)}/>
                    ))
                }
                <Score score={this.state.score}/>
            </div>
        )
    }
}



