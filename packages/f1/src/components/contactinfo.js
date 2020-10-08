import React from "react";
import { connect, styled, css } from "frontity";
import { render } from 'react-dom';
import FeaturedMedia from "./featured-media";
import Title from "./title";
import BootstrapCss from './styles/bootstrap.css';

/* background: ${{post.acf.color}}; */
const ContactInfo = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];
	//console.log(post.acf.information);

	const Html2React = libraries.html2react.Component;
	const arr = post.acf.information; 
	return (
		<>
		<ContactInfoDiv>
					<table className="table table-responsive-xs">
						<tbody>
						{arr.map((contact, index) => (
													<tr key={index}>
													  <th>{contact.titel}</th>
													  <td>{contact.innehall}</td>
													</tr>
												))}
						</tbody>
					</table>
				</ContactInfoDiv>				
				</>	
	)}
	
	export default connect(ContactInfo);
	
	
	const ContactInfoDiv = styled.div`
	margin: 30px 0 30px 0; 
	padding: 30px; 
	background: #033F73;
	font-size: 12px; 
	
	.table {
		color: #FFF;
		}
	`;



