import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import Item from "../list/list-item";
//import Image from "@frontity/components/image";
import HomeLoans from "../home-loans";

const HomePage = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const homepage = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  //const BannerSlider = homepage.acf.banner_slider; 
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  
  // Load the post, but only if the data is ready.
  return data.isReady ? (  
    <>
    <div className="jumbotron">
       <h1>KreditDebit</h1>
       <p className="lead">Kreditdebit skapades för att hjälpa dig att komma i kontakt med de bästa finansinsituten oavsett vilken situation du befinner dig i. Du kanske ska köpa en ny bil eller behöver samla dina små lån till ett större.
       </p>
       <p>Här hittar du informatiom oavsett vilken typ utav lån du söker. Söker du efter ett <a href="/billan/">billån</a>, <a href="/smslan">smslån</a> eller vill du bara <a href="/samla-lan">samla dina lån</a>? Oavsett vad har du kommit till rätt webbplats, vi guidar dig igenom denna djungel av lån. Hos oss hittar du recensioner av över 20 stycken <a href="/finaninstitut">finansinsitut</a> och flera läggs till varje dag och allt uppdateras regelbundet</p>
       <a className="btn btn-primary btn-lg" href="/privatlan" role="button">Jämför privatlån</a>
       <a className="btn btn-primary btn-lg" href="/billan" role="button">Jämför billån</a>       
     </div>
     
      
    <div>
        <Html2React html={homepage.content.rendered} />      
     </div>
     <div className="row">
     <HomeLoans />

     </div>
</>

                  ): null;
};

export default connect(HomePage);

const Container = styled.div`
  
`;
