import React from "react";
import { connect, styled } from "frontity";
import { render } from 'react-dom';
import FeaturedMedia from "./featured-media";
import BootstrapCss from './styles/bootstrap.css';

const Faq = ({ state }) => {
const data = state.source.get(state.router.link);
const post = state.source[data.type][data.id];

return (
<FaqBlock itemType="https://schema.org/FAQPage">
<div className="faq-container" itemScope="" itemType="https://schema.org/FAQPage">

{post.acf.qanda.map((faq, index) => (												
	<div className="faq-box" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question" key={index}>
		<h5 itemProp="name">{faq.question}</h5>
		<div className="answer" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
			<p itemProp="text">{faq.answer}</p>
		</div>
	</div>
))}
</div>
</FaqBlock>
)}
const FaqBlock = styled.section`

`

export default connect(Faq);
