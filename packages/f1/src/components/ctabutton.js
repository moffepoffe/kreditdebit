import React from "react";
import { Global, css, connect, styled,  } from "frontity";
import { render } from 'react-dom';
import device from "./assets/sizes";
//https://jsramblings.com/how-to-use-media-queries-with-styled-components/
const CtaButton = styled.a`
font-size: 14px;
font-weight: bold; 
padding: 15px 58px;
border-radius: 50px;
color: #fff;
background-color: var(--brand);
text-decoration: none !important;
box-shadow: 0 4px 14px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04);
transition: all .4s ease-in-out;
color: #fff !important;
height: 50px;
width: 205px;
margin-top: 15px;

&:hover {
	background-color: palevioletred;
	color: white;
  }
  @media ${device.s} {
		padding: 10px 20px;
	}
	
`;
export default connect(CtaButton);
