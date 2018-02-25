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
        let tmp_func = this.onCardClick;
        this.onCardClick = function () {
            alert('Rano!')
        }
        setTimeout(function () {
            this.setState({is_active:false})
            this.onCardClick = tmp_func;
        }.bind(this),3000)
    }
    componentWillReceiveProps(){
        //console.log(this.props)
        if(this.props.counter==2){this.setState({is_active:false})}
    }
    onCardClick(){
        if(!this.state.is_active && this.props.counter<2){
            this.setState({is_active:true})
            this.props.handler();
        }
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