import './title.scss';


const Title = ( { heading }: { heading: string }) => {
    return (
        <>
            <h1>{ heading.toUpperCase() }</h1>
            <div className="divider"></div>
        </>

    )
}

export default Title