import React from 'react'
import { Engine } from "../engine/engine";
import { Card } from "./card.jsx";

export class GameTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            playCards:[],
            openCards:[],
            selectedCard:{id:'',val:''},
            counter:0
        }
    }
    componentWillMount(){
        let engine = new Engine()
        this.setState({playCards:engine.generateCards()})
    }
    selectCard(card_val,card_id){
        this.setState({counter:this.state.counter+1})
        if (this.state.selectedCard.id==''){
            this.setState({
                selectedCard:{
                    id:card_id,
                    val:card_val
                }
            })
        } else {
            if(card_id == this.state.selectedCard.id){alert('Ti idiot?'); return;}
            setTimeout(function () {
                let msg = (card_val == this.state.selectedCard.val) ? 'ono!' : 'ne ono'
                alert (msg)
                this.setState({selectedCard:{id:'',val:''},counter:0})
            }.bind(this),1000)
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
                              handler={()=>this.selectCard(card.value,card.id)}/>
                    ))
                }
            </div>
        )
    }
}



