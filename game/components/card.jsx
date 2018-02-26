import React from 'react'

/*
export const Card = ({value,handler}) => (
    <div className={value+' '+'card'} onClick={(e)=>handler(value,e.target)}>
        <img src={'/img/cards/'+value+'.png'} className={'card show'}/>
    </div>
)*/


export class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            card_val:props.card_val,
            card_id:props.card_id,
            is_active:true
        }
    }
    componentDidMount(){
        setTimeout(function () {
            this.setState({is_active:false})
        }.bind(this),3000)
    }
    componentWillReceiveProps(){
        if(this.props.counter==2){this.setState({is_active:false})}
    }
    onCardClick(){
        this.props.handler(this);
    }
    render(){
        let pic = this.state.is_active ? this.state.card_val : 'hidden'
        return(
            <div className={this.props.value+' '+'card'} onClick={()=>this.onCardClick()}>
                <img src={'/img/cards/'+pic+'.png'} className={'card'}/>
            </div>
        )
    }
}