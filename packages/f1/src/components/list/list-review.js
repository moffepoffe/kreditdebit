import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import Image from "@frontity/components/image";
import CtaButtonBig from "../ctabutton";
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
	  <div className="col-12 col-lg-4 col-md-6">
		<div className="card">
		<Link link={item.link}>
		<img className="card-img-top img-fluid" src={imgsrc} alt={item.title.rendered}/>
		</Link>
		  <div className="card-body">
			<h4 className="card-title" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      <table className="table">
      <tbody>
              {item.acf.affiliate_info_list.slice(0,5).map((infolist, index) => (
              <tr key={index}>
                <th>{infolist.item_title}</th>
                <td>{infolist.item_value}</td>
              </tr>
            ))}
            </tbody>      
      </table>
      <div className="list-btm-btn">
      <CtaButtonSmall href={item.acf_affiliate_url} rel="nofollow" target="_blank">Till Ansökan</CtaButtonSmall>
      <CtaButtonBorderOnly href={item.link}>Läs mer</CtaButtonBorderOnly>
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
const CtaButtonSmall = styled.a`
font-size: 13px;
padding: 10px 20px;
border-radius: 50px;
color: #fff;
background-color: var(--brand);
text-decoration: none !important;
box-shadow: 0 3px 3px rgba(0,0,0,0.31), 0 2px 1px rgba(0,0,0,0.07);
transition: all .4s ease-in-out;
float: left;
`;

const CtaButtonBorderOnly = styled.a`
font-size: 13px;
padding: 8px 20px;
border-radius: 50px;
color: var(--brand);
border: 2px solid var(--brand);
text-decoration: none !important;
box-shadow: 0 3px 3px rgba(0,0,0,0.31), 0 2px 1px rgba(0,0,0,0.07);
transition: all .4s ease-in-out;
float: right;
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
