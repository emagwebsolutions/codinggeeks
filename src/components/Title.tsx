import '../sass/title.scss';


const Title = ( { heading }: { heading: string }) => {
    return (
        <>
            <h1>{ heading }</h1>
            <div className="divider"></div>
        </>

    )
}

export default Title