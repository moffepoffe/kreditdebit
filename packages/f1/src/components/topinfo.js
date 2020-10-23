import React from "react";
import { connect, styled, css } from "frontity";
import { render } from 'react-dom';
import FeaturedMedia from "./featured-media";
import Title from "./title";
import BootstrapCss from './styles/bootstrap.css';
import CtaButtonBig from "./ctabutton";
import device from "./assets/sizes";

/* background: ${{post.acf.color}}; */
const TopInfo = ({ state, actions, libraries }) => {
	const data = state.source.get(state.router.link);
	const post = state.source[data.type][data.id];
	const Html2React = libraries.html2react.Component;
	
	return (
		<>
		<BannerDiv>
							<div className="container">
							<div className="row">
								<div className="col-12 text-center">
								<h1>{post.title.rendered}</h1>
									<SmallInfo><Html2React html={post.acf.affiliate_small_info} /></SmallInfo>
								</div>
				</div>
				
				<LoanBoxDiv>
					<div className="row">
						<div className="col-12 col-md-7 padding-r-0 order-2 order-md-1">
							<ListBoxDiv>
								<table className="table table-responsive">
									<tbody>
									{post.acf.affiliate_info_list.map((infolist, index) => (
									<tr key={index}>
									  <th>{infolist.item_title}</th>
									  <td>{infolist.item_value}</td>
									</tr>
								))}
								</tbody></table>
							</ListBoxDiv>
						</div>
						<div className="col-12 col-md-5 padding-l-0 order-md-2 order-1">
							<LoanRightBox className="loan-right-box h-100">
							<LoanLogoDiv background={post.acf.review_thumbnail.url}/>
									<div>
										<CtaButtonBig href={post.acf_affiliate_url} rel="nofollow" target="_blank">Till ansökan</CtaButtonBig>
									</div>
									</LoanRightBox>
								
													</div>
												</div>
											</LoanBoxDiv>				
				
				</div>
				</BannerDiv>						
		</>
	)

	
}	
// We create a variable to use later as example.

const LoanRightBox = styled.div`
background: #f6f6f6;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`;
const LoanBoxDiv = styled.div`
background: #FFF;
`;

const ListBoxDiv = styled.div`
padding: 30px;
@media (max-width: 768px) {
	font-size: 12px;
	padding: 5px;
  }
 
`;
const BannerDiv = styled.div`
	padding: 80px 0px 10px 0px;
	background-position: inherit;
	background-size: cover;
	position: relative; 
	background: #012840; 
	
	h1 {
	color: #FFF;
	}
	
	@media ${device.s} {
		.table th  {
		border-top: none; 	
		}
	  }
	`;
	const linkColor = "green";
	
const LoanLogoDiv  = styled.div`
	height: 120px;
	width: 239px;
	background: ${props => `url(${props.background}) no-repeat`};
	background-size: contain;
	background-repeat: no-repeat;
	display: inline-block;
	margin-bottom: 30px;
	background-position: center;
			`;	
			
			
			const SmallInfo = styled.p`
			color: #FFF; 
			`
export default connect(TopInfo);
