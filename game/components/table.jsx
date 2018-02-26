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
    componentDidMount(){
        let tmp_fun = this.selectCard
        this.selectCard= function () {
            alert('Rano!')
        }
        setTimeout(function () {
            this.selectCard = tmp_fun
        }.bind(this),3000)
    }
    selectCard(card_val,card_id,card){
        if(!card.state.is_active && card.props.counter<2) {
            card.setState({is_active: true})
            this.setState({counter:this.state.counter+1})
            if (this.state.selectedCard.id==''){
                this.setState({
                    selectedCard:{
                        id:card_id,
                        val:card_val
                    }
                })
            } else {
                setTimeout(function () {
                    let msg = (card_val == this.state.selectedCard.val) ? 'ono!' : 'ne ono'
                    alert (msg)
                    this.setState({selectedCard:{id:'',val:''},counter:0})
                }.bind(this),1000)
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
                              handler={(obj)=>this.selectCard(card.value,card.id,obj)}/>
                    ))
                }
            </div>
        )
    }
}



