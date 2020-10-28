import React from "react";
import { connect, styled, css } from "frontity";
import { render } from 'react-dom';
import FeaturedMedia from "./featured-media";
import Title from "./title";
import BootstrapCss from './styles/bootstrap.css';

/* background: ${{post.acf.color}}; */
const LoanExample = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];

	const Html2React = libraries.html2react.Component;
	return (
		<>
		<LoanExampleDiv>
					<table className="table table-responsive-xs">
						<tbody>
						{post.acf.exempel_tabell.map((contact, index) => (
													<tr key={index}>
													  <th>{contact.titel}</th>
													  <td>{contact.innehall}</td>
													</tr>
												))}
						</tbody>
					</table>
					<OfferText>{post.acf.exempel_text}</OfferText>
				</LoanExampleDiv>				
				</>	
	)}
	
	export default connect(LoanExample);
	
	
	const LoanExampleDiv = styled.div`
	margin-bottom: 30px; 
	padding: 30px; 
	background: #63CAF2;
	color: #FFF;
	font-size: 12px; 
	
	.table, .table th {
	color: #FFF;
	}
	`;
const OfferText = styled.p`
font-style: italic;
font-size: 10px;
color: #FFF;
margin-top: 10px;
`


