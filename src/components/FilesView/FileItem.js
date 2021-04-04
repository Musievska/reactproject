import React from 'react';

import IncertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

export const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`;
    
    return (
        <div>
            
        </div>
    )
}

export default FileItem;