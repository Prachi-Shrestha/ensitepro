import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import ArticleCarousel from "../Student/ArticleCarousel";
import FeedbackForm from "../Student/FeedbackForm";
import Header2 from "../../Components/Common/Header2";
import Highlights from "../Student/Highlights";
import News from "../Student/News";

function Teacher() {
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
      <Header2/>
      <News/>
      <Highlights/>
      <ArticleCarousel/>
      <FeedbackForm/>
      <Outlet/>
    </div>
  )
}
}

export default Teacher