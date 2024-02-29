import './Welcome.css'

type Props = {
    greeting: string
}

const Welcome = ({ greeting }: Props) => {
    return (
        <>
            <div className='greeting-container'>
                <p>{greeting}</p>
            </div>
        </>
    )
}

export default Welcome