import { mapFunc } from '../Types'

const MapFunc = <T extends Function > ( fn: mapFunc<T> ) => {
    return ( arr: { q: string, ans: string}[] ) => {
        return Object.values(arr).map( ( v,k ) => fn(v,k) )
    }
}

export default MapFunc