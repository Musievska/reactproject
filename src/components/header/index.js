import React from 'react'

import GoogleDriveIcon from '../../media/Google-Drive-icon.png'

const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GoogleDriveIcon} alt="Google Drive" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
            <div className="header__searchBar"></div>
            </div>
            <div className="header__icons"></div>
            
        </div>
    )
}

export default index;
