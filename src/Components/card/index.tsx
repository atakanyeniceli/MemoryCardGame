import { useEffect, useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { _select } from "../../features/cardSlice"
import { ICard } from "../../Interfaces/ICard"
import questionSymbol from '../../Assets/questionSymbol.png'

interface IProps {
    _item: ICard,
}

const Card = ({ _item }: IProps) => {

    const [status, setStatus] = useState(_item.status)
    const dispatch = useAppDispatch()

    useEffect(() => { setStatus(_item.status) }, [_item])

    return (
        <div onTransitionEnd={() => status ? dispatch(_select({ ..._item })) : null} onClick={() => setStatus(true)} style={{ transformStyle: 'preserve-3d', transform: `${status ? 'rotateY(180deg)' : 'none'}` }} className='relative h-28 w-20 hover:cursor-pointer duration-700'>
            <div style={{ backfaceVisibility: 'hidden' }} className='w-full h-full absolute  ' >
                <img className='mt-[25%]' src={questionSymbol} alt="Loading..." />
            </div>
            <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} className='mt-[25%] absolute'>
                <img className='' src={_item.image} alt="Loading..." />
            </div>
        </div>
    )
}

export default Card