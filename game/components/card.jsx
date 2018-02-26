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
            val:props.card_val,
            id:props.card_id,
            is_active:true,
            is_open:false
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
    render(){
        let pic = this.state.is_open ? this.state.val : this.state.is_active ? this.state.val : 'hidden'
        return(
            <div className={'card'} onClick={()=>this.props.handler(this)}>
                <img src={'/img/cards/'+pic+'.png'} className={'card'}/>
            </div>
        )
    }
}