import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
 
// simplest form (only email)
const Footer = ({ state }) => {

  return (
    <>
      <Container>
        <div className="row">
          <div className="col-12 col-lg-6 footer-widget widget-one">
            <h6 className="widget-title">Om oss</h6>
            <p>Kreditdebit är en oberoende jämförelsesajt som inte ägs av något kreditinstitut. Vi lånar inte ut pengar utan förmedlar bara information om aktuella erbjudanden hos våra utvalda partners. Alla krediter på denna sida är högkostnadskrediter och bör användas med försiktighet.</p> 
            
            <p>Pagafantas Group AB 2020</p>
          </div>
          <div className="col-12 col-md-4 col-lg-3 footer-widget widget-two">
            <h6 className="widget-title">Länkar</h6>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/about/">Integretespolicy</Link></li>
              <li><Link className="widget-list-link" link="/services/">Services</Link></li>
              <li><Link className="widget-list-link" link="/jobs/">Career</Link></li>
              <li><Link className="widget-list-link" link="/artiklar/">Blog</Link></li>
              <li><Link className="widget-list-link" link="/kontakt/">Kontakt</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-3 footer-widget widget-three">
            <h6 className="widget-title">Låna pengar</h6>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/about/">Billån</Link></li>
              <li><Link className="widget-list-link" link="/services/">Bolån</Link></li>
              <li><Link className="widget-list-link" link="/jobs/">Samla krediter</Link></li>
              <li><Link className="widget-list-link" link="/blog/">Smslån</Link></li>
              <li><Link className="widget-list-link" link="/contact/">Kreditkort</Link></li>
            </ul>
          </div>
        </div>

      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  display: flex;
  width:100%;
  max-width:1140px;
  justify-content:center;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
  }
}
`;
