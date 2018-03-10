import React from 'react'

export class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:props.card_val,
            id:props.card_id,
            is_active:true,
            is_open:false
        }
    }
    componentDidMount(){
        setTimeout(function () {
            this.setState({is_active:false})
        }.bind(this),5000)
    }
    componentWillReceiveProps(){
        if(this.props.counter==2){this.setState({is_active:false})}
    }
    render(){
        let pic = this.state.is_open ? this.state.value : this.state.is_active ? this.state.value : 'hidden'
        return(
            <div className={'card'} onClick={()=>this.props.handler(this)} data-tid="Card">
                <img src={'/img/cards/'+pic+'.png'}/>
            </div>
        )
    }
}