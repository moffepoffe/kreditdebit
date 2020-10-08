import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import Image from "@frontity/components/image";
import CtaButton from "../ctabutton";
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
 //<div className="card-text" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

const ReviewItem = ({ state, item }) => {
  const data = state.source.get(state.router.link);
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  let readMoreLabel = 'More Details';
  const imgsrc = item.acf.review_thumbnail.url;
  return (
	<>
	  <div className="col-12 col-md-3">
		<div className="card">
		<Link link={item.link}>
		<img class="card-img-top img-fluid" src={imgsrc} alt={item.title.rendered}/>
		</Link>
		  <div className="card-body">
			<h4 className="card-title" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
			<div className="text-center">
			<CtaButton href="#">Till Ansökan</CtaButton>
			</div>
		  </div>
		</div>
	  </div>
	  
	</>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ReviewItem);
const Article = styled.article`

`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom:1.5rem;
  color: var(--black);
  box-sizing: border-box;
  transition: all .3s ease;
`;

const AuthorName = styled.span`
  color: var(--black);
  font-size: 1rem;
  margin-right:1rem;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: var(--gray);
  font-size: 0.875rem;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
`;
