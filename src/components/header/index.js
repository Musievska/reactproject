import React from 'react'

import GDriveLogo from '../../media/Google-Drive-icon.png'

const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer"></div>
            <div className="header__icons"></div>
            
        </div>
    )
}

export default index;
