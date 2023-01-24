import { NavLink } from 'react-router-dom';
import plane from '../../../../assets/img/plane.png'

const NavItem = ({text, border, dropdown}) => {
    return (
        <div className='nav_item'>
            <NavLink className={dropdown ? 'dropdown' : ''}>
                <h5 className={border ? 'border' : ''} style={{padding: dropdown ? '0.5rem 0.5rem' : '0.5rem 1rem' }}>{text}</h5>
                { dropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832"/>
                    </svg>                    
                )}
                <img src={plane} alt='plane'/>
            </NavLink>
        </div>
    );
}

export default NavItem;