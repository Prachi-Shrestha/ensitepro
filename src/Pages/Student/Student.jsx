import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import ArticleCarousel from "./ArticleCarousel";
import FeedbackForm from "./FeedbackForm";
import Header from "../../Components/Common/Header";
import Highlights from "./Highlights";
import News from "./News";
import Resources from "./Resources";

function Student() {
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
        <Header/>
        <News/>
        <Highlights/>
        <ArticleCarousel/>
        <Resources/>
        <FeedbackForm/>
      </div>
    )
}
}
export default Student