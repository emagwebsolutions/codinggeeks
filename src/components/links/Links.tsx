import { Link } from 'react-router-dom'


const Links = ( { url,text,icon,closenav }: { url: string, text: string, icon: string, closenav: ( e:React.MouseEvent<HTMLElement> ) => void } ) => {

    return (
        <li>
            <Link to={`/${url}`} onClick = { closenav } >
                <i className={`fa ${icon} fa-lg`}></i> { text }
            </Link>
        </li>
    )

}

export default Links