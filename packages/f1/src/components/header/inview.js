import React from "react";
import { connect, styled } from "frontity";
import useInView from "@frontity/hooks/use-in-view";
import Nav from "./nav";
import FixedHeader from "../fixedheader"; 

const InViewOnScroll = ({ children, state }) => {
  // Get the reference and the visibility status.
  const { ref, inView } = useInView({ triggerOnce: false });
  // Pass the reference to the container and render `children` if
  
const data = state.source.get(state.router.link);
const post = state.source[data.type][data.id];  
  // the container is visible, or a placeholder otherwise.
if (data.isPrpReviews) {
  return <div ref={ref}>{inView ? <Nav /> : <FixedHeader />}</div>;
}
else {
	  return <div ref={ref}>{inView ? <Nav /> : <Nav />}</div>;
	}
};

export default connect(InViewOnScroll);
