import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Review from "./pages/review"
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from './styles/bootstrap.min.css';
import BootstrapGrid from './styles/bootstrap-grid.min.css';
import BootstrapReboot from './styles/bootstrap-reboot.min.css';
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import TopInfo from "./topinfo.js";
import ContactInfo from "./contactinfo";
import LoanExample from "./loanexample.js";
import MontserratLight from "./assets/fonts/Montserrat-Light.ttf";
import MontserratLightItalic from "./assets/fonts/Montserrat-LightItalic.ttf";
import MontserratSemiBold from "./assets/fonts/Montserrat-SemiBold.ttf";



/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="sv" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(BootstrapGrid)} />
      <Global styles={css(BootstrapReboot)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer className="container">
        <Header />
      </HeadContainer>
      
      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}              
      {data.isPrpReviews && (
                  <TopInfo/>  
                   )}              
                   <Main>        
    <div className="container">   
    <div className="row">    
      <div className={data.isPrpReviews ? "col-12 col-md-8" : "col-12"}>
          <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} /> 
          <Page when={data.isPage} />
          <Review when={data.isPrpReviews} />                    
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </div>
      {data.isPrpReviews && (
        <>
        <div className="col-12 col-md-4">        
        <LoanExample />        
        <ContactInfo />		
        </div>        
        </>
       )}    
      </div>
      </div>
      </Main>
      <FooterContainer>
        <Footer/>
      </FooterContainer>      
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --brand: #368ABF;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #FFFFFF;
  }
  @font-face {
      font-family: "Montserrat Light";
      font-style: normal;
      font-weight: normal;
      font-display: fallback;
      src: url("${MontserratLight}") format("truetype");
    }  

    @font-face {
          font-family: "Montserrat Light";
          font-style: italic;
          font-weight: normal;
          font-display: fallback;
          src: url("${MontserratLightItalic}") format("truetype");
        }    
        @font-face {
                font-family: "Montserrat Light";
                font-style: normal;
                font-weight: 600;
                font-display: fallback;
                src: url("${MontserratSemiBold}") format("truetype");
              }         
  body {
    margin: 0;
    color:var(--blackl);
    font-family: Montserrat Light, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }
  a,
  a:visited {  
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color:var(--black);
    font-weight: 600;
  }
  p {
    line-height:24px;
    font-size:14px;
  }
  #root {
    display:flex;
    flex-direction: column;
    height: 100vh;
  }
  .card { 
    margin-bottom: 30px;
 }
 .last-updated {
 font-size: 10px; 
 font-style: italic;
 }
`;

const HeadContainer = styled.div`
  display: flex;
  width:100%;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2.75rem;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom:1rem;

`;
const FooterContainer = styled.div`
  display: flex;
  width:100%;
  background:var(--brand);
  // margin-top: auto;
`;

const Main = styled.div`
padding: 20px 0px;
margin-top: 10px;
margin-bottom: 10px;
`;
