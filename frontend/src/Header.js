import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    

    return (
        <div className='header'>
            <Link  to ='/'>
                <span className='header__logo'>Home</span>    
            </Link>
            
            
            <div className='header_nav'>
                <Link to ='/loginregister' >
                    <div className='header__option'>
                        <span className='header__optionLine'>Sign In & Register</span>
                    </div>
                </Link>
                <Link to='/question'>
                    <div className='header__option'>
                        <span className='header__optionLine'>Attened MCQ</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
