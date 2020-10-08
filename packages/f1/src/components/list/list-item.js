import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import FeaturedMedia from "../featured-media";
import Image from "@frontity/components/image";
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const data = state.source.get(state.router.link);
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const isJobs = data.isAwsmJobOpeningsArchive;

  let readMoreLabel = 'Läs mer';


  return (
    <>
        <div className="row">
          <div className="col-12">
        {state.theme.featured.showOnList && (
          <FeaturedMedia id={item.featured_media} />
        )}

        <div className="bio-info">
          {/* If the post has an author, we render a clickable author text. */}

          <PublishDate>
            {" "}
            {date.toDateString()}
          </PublishDate>
        </div>

        <Link className="article-title" link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        )}
        <Link className="redmore-btn" link={item.link}>{ readMoreLabel }...</Link>
        </div>
</div>
    </>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom:1.5rem;
  color: var(--black);
  box-sizing: border-box;
  transition: all .3s ease;
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
