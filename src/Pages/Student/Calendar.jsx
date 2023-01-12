import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'; 
import CommonCalendar from '../../Components/Common/Calendar';
import ComponentHeader from '../../Components/Common/ComponentHeader';

function Calendar() {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  
if(!authenticated){
    return <Navigate replace to ='/'></Navigate>
  }
  else{
  
    return (
        <div>
            <ComponentHeader title='Calendar'/>
            <CommonCalendar url='rest/Student'/>
        </div>
    )
  }
}

export default Calendar