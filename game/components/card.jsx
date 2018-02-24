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
        this.state = {actualVal:'hidden',cardVal:props.value}
    }
    componentWillMount(){}
    componentDidMount(){}
    onCardClick(){
        this.setState({actualVal:this.state.cardVal})
        this.props.handler(this.state.actualVal);
    }
    render(){
        console.log(this.state)
        return(
            <div className={this.props.value+' '+'card'} onClick={()=>this.onCardClick()}>
                <img src={'/img/cards/'+this.state.actualVal+'.png'} className={'card'}/>
            </div>
        )
    }
}