import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import ReviewItem from "./list-review";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  let title = 'Artiklar';
  if ( data.isPrpReviewsArchive ) {
    title = 'Finansinstitut';
  }
  return (
    <Articles>
      {/* If the list is a blog posts, we render a title. */}
      {data.isPostArchive && (
        <Header>
          {title}
        </Header>
      )}

      {data.isPrpReviewsArchive && (
        <Header>
          {title}
        </Header>
      )}      
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {data.isPrpReviewsArchive && (
                <section className="section">
                    <div className="row"> 
                    {/* Iterate over the items of the list. */}
                    {data.items.map(({ type, id }) => {
                      const item = state.source[type][id];
                      // Render one Item component for each one.
                      return <ReviewItem key={item.id} item={item} />;
                    })}
                  </div>
                </section>
            )}
                  
      
      {!data.isPrpReviewsArchive && (
          <>
          {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              // Render one Item component for each one.
              return <Item key={item.id} item={item} />;
            })}
          </>
      )}

      <Pagination />
    </Articles>
  );
};

export default connect(List);

const Container = styled.section`

  list-style: none;
`;
const Articles = styled.div`
`;
const Header = styled.h1`
  text-align:center;
  margin-bottom:3rem;

`;
