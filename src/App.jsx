import { useEffect } from "react";
import Dialogs from "./components/Dialogs.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Page from "./components/Page.jsx";
import SideRail from "./components/SideRail.jsx";
import SvgDefs from "./components/SvgDefs.jsx";
import { destroyPage, initPage } from "./lib/site";

export default function App() {
  useEffect(() => {
    initPage(document.getElementById("main-content"));
    return destroyPage;
  }, []);
  return (
    <>
      <SvgDefs />
      <a className="skip" href="#main-content">Skip to content</a>
      <div className="pb" id="pb" />
      <Header />
      <SideRail />
      <main id="main-content" tabIndex={-1}>
        <Page />
      </main>
      <Footer />
      <Dialogs />
    </>
  );
}
