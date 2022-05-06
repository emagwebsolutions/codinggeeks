import '../sass/accordion.scss';
import MapFunc from './utils/MapFunc'
import { accordionData,accordionDataValues } from './Types'


const Accordion = ( { data }: accordionData ) => {

    const html = ( v: accordionDataValues, k: number) => (
        <div className="accordion" key={k}>
            <div className="accordion-top flex space-between">
                <h4>{v.q}</h4> <span>+</span>
            </div>
            <div className="accordion-bottom">
                {v.ans}
            </div>
        </div>
    )
    const res = MapFunc( html )( data ) 

    return (
        <>
        { res }
        </>
    )
}

export default Accordion