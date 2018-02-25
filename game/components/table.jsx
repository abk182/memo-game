import React from 'react'
import { Engine } from "../engine/engine";
import { Card } from "./card.jsx";

export class GameTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            playCards:[],
            selectedCard:''
        }
    }
    componentWillMount(){
        let engine = new Engine()
        this.setState({playCards:engine.generateCards()})
    }
    selectCard(card_val){
        if (this.state.selectedCard==''){
            this.setState({selectedCard:card_val})
        } else {
            let msg = (card_val == this.state.selectedCard) ? 'ono!' : 'ne ono'
            alert (msg)
            this.setState({selectedCard:''})
        }

    }
    render(){
        console.log(this.state)
        return(
            <div className='table'>
                {
                    this.state.playCards.map(card=>(
                        <Card key={card.id}
                              value={card.value}
                              selectedCard={this.state.selectedCard}
                              handler={()=>this.selectCard(card.value)}/>
                    ))
                }
            </div>
        )
    }
}



