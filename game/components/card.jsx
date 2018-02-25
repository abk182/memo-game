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
            actual_val:props.card_val,
            card_val:props.card_val,
            card_id:props.card_id
        }
    }
    componentDidMount(){
        let tmp_func = this.onCardClick;
        this.onCardClick = function () {
            alert('Rano!')
        }
        setTimeout(function () {
            this.setState({actual_val:'hidden'})
            this.onCardClick = tmp_func;
        }.bind(this),3000)
    }
    componentWillReceiveProps(){
       // console.log(this.props)
       // if(this.props.counter==1){this.setState({actual_val:'hidden'})}
    }
    onCardClick(){
        if(this.props.counter<2){
            this.setState({actual_val:this.state.card_val})
            this.props.handler();
        } else {alert('ouououou stope!')}


    }
    render(){
        return(
            <div className={this.props.value+' '+'card'} onClick={()=>this.onCardClick()}>
                <img src={'/img/cards/'+this.state.actual_val+'.png'} className={'card'}/>
            </div>
        )
    }
}