import React from "react";
import PageTransition from "../componenets/PageTransition";
import Section1 from "../componenets/Section1";
import Section2 from "../componenets/Section2";
import FormSection from "../componenets/FormSection";
import Toprated from "../componenets/Toprated";
import CampingGr from "../componenets/CampingGr";
import HikingDiv from "../componenets/HikingDiv";
const Home = () => {
  return(<>
  <PageTransition>
  <Section1/>
  <Section2/>
  <FormSection/>
  <Toprated/>
  <CampingGr/>
  <HikingDiv/>
  </PageTransition>
  
  </>)
 
};
export default Home;
