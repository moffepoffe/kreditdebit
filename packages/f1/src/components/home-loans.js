
import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import Item from "./list/list-item";
//import Image from "@frontity/components/image";

const HomeLoans = ({ state, actions }) => {
  // 1. fetch data related to a path
  // With this useEffect we make the call to fetch
  // only the first time the component is rendered.
  // When the data is fetched, the state is updated with the new data
  // so the component is re-rendered and "data" will get proper content

  useEffect(() => {
	actions.source.fetch("/finansinsitut/");
  }, []);

  // 2. get data from frontity state
  const data = state.source.get("/finansinsitut/");

  // 3. get entities from frontity state
  if (data.isReady) {
	// the category entity
	//const category = state.source.category[data.id];

	// posts from that category
	const posts = data.items.map(({ type, id }) => state.source[type][id]);
	// 4. render!
		return (
			<>
		{posts.map((p) => (
		<div className="col-12 col-lg-4 col-md-6" key={p.id}>
				  <div className="card">
				  <Link link={p.link}>
				  <img className="card-img-top img-fluid" src={p.acf.review_thumbnail.url} alt={p.title.rendered}/>
				  </Link>
					<div className="card-body">
					  <h4 className="card-title" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
				<table className="table">
				<tbody>
						{p.acf.affiliate_info_list.slice(0,5).map((infolist, index) => (
						<tr key={index}>
						  <th>{infolist.item_title}</th>
						  <td>{infolist.item_value}</td>
						</tr>
					  ))}
					  </tbody>      
				</table>
				<div className="list-btm-btn">
				<CtaButtonSmall href={"https://wp.kreditdebit.com/go/" + p.acf.affiliate_key} rel="nofollow" target="_blank">Till Ansökan</CtaButtonSmall>
				<Link link={p.link}>
				<CtaButtonBorderOnly>Läs mer</CtaButtonBorderOnly>
				</Link>
					  </div>
					</div>
				  </div>
				</div>		
		
		
		))}
		</>

	);
  }

  return null;
};
			

export default connect(HomeLoans);

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

const CtaButtonBorderOnly = styled.span`
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


