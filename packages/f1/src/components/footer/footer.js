import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import CookieConsent from "react-cookie-consent";
//https://www.npmjs.com/package/react-cookie-consent
// simplest form (only email)
const Footer = ({ state }) => {

  return (
    <>
      <FContainer className="container">
      <div className="row">
          <div className="col-12 col-lg-6 footer-widget widget-one order-lg-1 order-3 ">
            <h6 className="widget-title">Om oss</h6>
            <p>Kreditdebit är en oberoende jämförelsesajt som inte ägs av något kreditinstitut. Vi lånar inte ut pengar utan förmedlar bara information om aktuella erbjudanden hos våra utvalda partners. Alla krediter på denna sida är högkostnadskrediter och bör användas med försiktighet.</p> 
            
            <p>Pagafantas Group AB 2020</p>
          </div>
          <div className="col-12 col-lg-3 footer-widget widget-two order-lg-2 order-2 ">
            <h6 className="widget-title">Länkar</h6>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/integritetspolicy/">Integretespolicy</Link></li>
              <li><Link className="widget-list-link" link="/artiklar/">Blog</Link></li>
              <li><Link className="widget-list-link" link="/kontakt/">Kontakt</Link></li>
            </ul>
          </div>
          <div className="col-12 col-lg 12 footer-widget widget-three order-1 order-lg-3">
            <h6 className="widget-title">Låna pengar</h6>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/billan/">Billån</Link></li>
              <li><Link className="widget-list-link" link="/bolan/">Bolån</Link></li>
              <li><Link className="widget-list-link" link="/samla-krediter/">Samla krediter</Link></li>
              <li><Link className="widget-list-link" link="/smslan/">Smslån</Link></li>
              <li><Link className="widget-list-link" link="/kreditkort/">Kreditkort</Link></li>
            </ul>
          </div>
        
        <CookieConsent location="bottom" buttonClasses="btn btn-primary" containerClasses="alert"  
          buttonText="Ok"   style={{
          background: "rgba(0,0,0, 0.8)",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold"
        }}
        buttonStyle={{
          background: "var(--brand)",
          borderRadius: "50px",
          padding: "15px 58px",
          color: "black"
        }}> Vi använder oss utav cookies för att förbättra användarupplevelsen. Genom att fortsätta på webbplatsen godkänner du att vi lagrar cookies. </CookieConsent>
        </div>
      </FContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const FContainer = styled.footer` 
background: var(--brand);  
padding-top: 20px;
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
