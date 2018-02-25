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
        this.state = {actualVal:props.value,cardVal:props.value}
    }
    componentDidMount(){
        setTimeout(function () {
            this.setState({actualVal:'hidden'})
        }.bind(this),3000)
    }
    componentWillReceiveProps(){
        if (this.props.selectedCard == ''){

        } else {
            this.setState({actualVal:'hidden'})
        }
    }
    onCardClick(){
        this.setState({actualVal:this.state.cardVal})
        setTimeout(function(){
            this.props.handler(this.state.actualVal);
        }.bind(this),1000)
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