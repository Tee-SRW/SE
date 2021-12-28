import React from 'react';
import Profilecompanyform from '../components/Profile/Profilecompanyform';


function Profilecompany(props) {
    const userWorkSelectID = (workSelected) => {
        props.onUpdateDataWorkID(workSelected)
    }

    return (
        <>
            <Profilecompanyform userWorkSelectID={userWorkSelectID} />
        </>
    );
}
export default Profilecompany;