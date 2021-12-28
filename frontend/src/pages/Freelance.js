import React from 'react';
import Freelanceform from '../components/Register/Freelanceform'

function Freelance(props) {
  const userTypeUpgrade = (userTypeUpgrade) => {
    props.onUpdateDataUser(userTypeUpgrade)
  }
  return (
    <>
      <Freelanceform userTypeUpgrade={userTypeUpgrade}/>
    </>
    
  ); 
}
export default Freelance;