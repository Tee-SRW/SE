import React from 'react';
import EditWorkCompanyform from '../components/Work/Edit-work/Edit-work-company';


function EditWorkCompany(props) {
    const userWorkSelectID = (workSelected) => {
        props.onUpdateDataWorkID(workSelected)
      }

    return (
        <>
            <EditWorkCompanyform userWorkSelectID={userWorkSelectID}/>
        </>
    );
}
export default EditWorkCompany;