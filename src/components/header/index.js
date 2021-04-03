import React from 'react'

import GoogleDriveIcon from '../../media/Google-Drive-icon.png'
import ExpandIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutLineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps'

const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GoogleDriveIcon} alt="Google Drive" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type='text' placeholder='Search in Drive'/>
                    <ExpandIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutLineIcon/>
                    <SettingsIcon/>
                </span>
                <AppsIcon/>
               <img src="" alt="User Photo"/>
            </div>

        </div>
    )
}

export default index;
