import { mapFunc } from '../Types'

const MapFunc = <mapFunc extends Function> ( fn: mapFunc ) => {
    return <mapFunc extends []> ( arr: mapFunc ) => {
        return arr.map( ( v,k ) => fn( v,k ))
    }
}

export default MapFunc