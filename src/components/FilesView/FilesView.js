import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'



export const FilesView = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data(),
            })))
        })
    }, [])

    console.log(files);

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