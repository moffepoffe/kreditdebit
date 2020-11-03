import React from "react";
import { connect, styled } from "frontity";
import useInView from "@frontity/hooks/use-in-view";
import Nav from "./nav";
import FixedHeader from "../fixedheader"; 

const InViewOnScroll = ({ children, state }) => {
  // Get the reference and the visibility status.
  const { ref, inView } = useInView({ triggerOnce: false });
    
const data = state.source.get(state.router.link);
const post = state.source[data.type][data.id];  

  // the container is visible, or a placeholder otherwise.
if (data.isPrpReviews === true || data.isPrpReviewsArchive === false) {
  return <div ref={ref}>{inView ? <Nav /> : <FixedHeader />}</div>;
  console.log('single');
}
else {
	  return <div ref={ref}>{inView ? <Nav /> : <Nav />}</div>;
	  console.log('inte single'); 
  }
};

export default connect(InViewOnScroll);
