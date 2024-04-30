
//import React from "react";

import Main from "../component/Main";
import Row from "../component/Row";

import requests from "../Requests";

const mainPage = () => {

  return(
   
     <>
      <Main/>
      <Row unId='1' title='Up coming' fetchUrl={requests.requestUpcoming}/>
      <Row unId='2' title='Popular' fetchUrl={requests.requestPopular}/>
      <Row unId='3' title='Trending' fetchUrl={requests.requestTrending}/>
      <Row unId='4' title='Top Rated' fetchUrl={requests.requestTopRated}/>
      <Row unId='5' title='Horror' fetchUrl={requests.requestHorror}/>
     </>
    
  ); 
}

export default mainPage