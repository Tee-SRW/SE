import React from 'react';
import ProfileFreelanceform from '../components/Profile/ProfileFreelanceform';


function Profilefreelance(props) {
    const userWorkSelectID = (workSelected) => {
        props.onUpdateDataWorkID(workSelected)
    }

    return (
        <>
            <ProfileFreelanceform userWorkSelectID={userWorkSelectID} />
        </>
    );
}
export default Profilefreelance;