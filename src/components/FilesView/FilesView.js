import React from 'react';


export const FilesView = () => {
    return (
        <div className="fileView">
            <div className="fileView__row">
            </div>

            <div className="filesView__titles">

                <div className="fileView__titles--left">
                    <p>Name</p>
                </div>
                <div className="fileView__titles--right">
                    <p>Last Modified</p>
                    <p>Files Size</p>
                </div>
            </div>
            </div>
    )
}

export default FilesView