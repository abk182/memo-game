export class Engine{
    generateCards(){
        //Генерация колоды
        let nums = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
        let suits = ['C','D','H','S'] //Clubs (♣) Diamonds (♦) Hearts (♥) Spades (♠)
        let cards = []
        suits.forEach(suit=>{
            nums.forEach(num=>{
                cards.push(num+suit)
            })
        })
        //Выбор карт учавствующих в игре
        let playCards = []
            for (let i = 0; i<18 ;i=i+2){
                let ci = Math.round(Math.random()*(cards.length-1))
                playCards[i]={id:i,value:cards[ci]}
                playCards[i+1]={id:i+1,value:cards[ci]}
                cards.splice(ci,1)
            }
        return playCards.sort(()=>Math.random()-0.5)
        }
}