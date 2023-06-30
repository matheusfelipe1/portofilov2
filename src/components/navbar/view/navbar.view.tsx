
import './navbar.view.css'

export function NavBarView() {
    return (
        <div className="nav-bar">
            <div className='fixed-navs'>

                <div style={{ position: 'relative' }}>
                    <div className='languages2'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div id='network' className='container'>
                    <i className='pi pi-instagram icon'></i>
                    <i className='pi pi-whatsapp icon'></i>
                    <i className='pi pi-github icon'></i>
                    <i className='pi pi-linkedin icon'></i>
                </div>
            </div>
        </div>
    )
}