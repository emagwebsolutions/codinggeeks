import './accordion.scss';
import MapFunc from '../utils/MapFunc'
import { accordionData,accordionDataValues } from '../Types'
import { useState } from 'react'


const Accordion = ( { data }: accordionData ) => {

    const [ showAccordion, setShowAccordion ] = useState < number | null > ( null )

    const checkAccordionIndex = ( index: number ) => {

        if( index === showAccordion ){
            return setShowAccordion( null )
        }

        setShowAccordion( index )

    }

    const html = ( v: accordionDataValues, k: number ) => (

        <div className="accordion" key={k}>
            <div className="accordion-top flex space-between" onClick={() => checkAccordionIndex( k ) }>
                <h4>{v.q}</h4> <span>{`${ showAccordion === k ? '-' : '+' }`}  </span>
            </div>
            <div className={`accordion-bottom ${ showAccordion === k ? 'show' : '' }`}>
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