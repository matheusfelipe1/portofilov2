
import './icon.view.css'

export function Icon(props: any) {
    return (<div style={{position: 'relative'}}>
        <i className={props.icon + ' icon1'}></i>
    </div>)
}