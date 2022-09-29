import {  useAppSelector } from "../../app/hooks"
import Card from "../card"


const Content = () => {
    const _cardList = useAppSelector(e => e.card.cardList)

    return (
        <div className='grid grid-cols-3 gap-3 items-center justify-items-center my-5'>
            {
                _cardList.map((card, i) => <div key={i}>
                    <Card _item={card} />
                </div>
                )
            }
        </div >
    )
}

export default Content