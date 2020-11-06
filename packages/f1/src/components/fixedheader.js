import React from "react";
import { connect, styled } from "frontity";
import { render } from 'react-dom';
import FeaturedMedia from "./featured-media";
import BootstrapCss from './styles/bootstrap.css';
import CtaButtonBig from "./ctabutton";

const FixedHeader = ({ state }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];
	
	return (
		<FixedHeaderDiv id="topBanner">
		<FixedInnerDiv>
			<TopLogo background={post.acf.review_thumbnail.url}/>	
			<div className="text-right" style={{padding: '30px 15px'}}>
			<CtaButtonBig href={"https://wp.kreditdebit.com/go/" + post.acf.affiliate_key} rel="nofollow" target="_blank">Till ansökan</CtaButtonBig>
			</div>		
			</FixedInnerDiv>	
		</FixedHeaderDiv>    
	)
}	
	

const FixedHeaderDiv = styled.div`
display: block;
background:  #FFFFFF;
position: fixed;
top: 0px;
left 0px; 
width: 100%;
height: 87px;
z-index: 1;
box-shadow: 0px 0px 10px #00000042;
`;

const TopLogo = styled.div`
height: 50px;
background: ${props => `url(${props.background}) no-repeat`};
background-repeat: no-repeat !important;
margin-top: 15px;
background-size: contain !important;
width: 110px;
background-position-y: center !important;
`;

const FixedInnerDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 0 15px;
`;

export default connect(FixedHeader);
