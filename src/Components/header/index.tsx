import { useAppSelector } from "../../app/hooks"


const Header = () => {

    const _score = useAppSelector(e => e.card.score)

    return (
        <div className='text-4xl'>
            Welcome Memory Game
            <div className='text-2xl'>
                Score: {_score}
            </div>
        </div>
    )
}

export default Header