import React from 'react';
import EditWorkFreelanceform from '../components/Work/Edit-work/Edit-work-freelance';


function EditWorkFreelance(props) {
    const userWorkSelectID = (workSelected) => {
        props.onUpdateDataWorkID(workSelected)
      }

    return (
        <>
            <EditWorkFreelanceform userWorkSelectID={userWorkSelectID}/>
        </>
    );
}
export default EditWorkFreelance;