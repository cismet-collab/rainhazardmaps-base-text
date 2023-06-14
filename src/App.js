import "./App.css";
import GenericModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import Introduction from "./lib/help/Help05Introduction";
import Karteninhalt from "./lib/help/Help20Karteninhalt";
import ModellfehlerMelden from "./lib/help/Help80ModellfehlerMelden";
import Haftungsausschluss from "./lib/help/Help90Haftungsausschluss";
import Footer from "./lib/help/Help99Footer";
import { useContext, useEffect } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";

function App() {
  const version = "0.0.0";
  const reactCismapRHMVersion = "0.0.0";
  const footerLogoUrl = undefined;
  const { setAppMenuVisible } = useContext(UIDispatchContext);
  useEffect(() => {
    setAppMenuVisible(true);
  }, [setAppMenuVisible]);
  return (
    <GenericModalApplicationMenu
      menuIntroduction={<Introduction />}
      menuIcon="info"
      menuTitle="Kompaktanleitung und Hintergrundinformationen"
      menuSections={[
        <Karteninhalt key="Karteninhalt" />,
        <Haftungsausschluss key="Haftungsausschluss" />,
        <ModellfehlerMelden key="ModellfehlerMelden" />,
      ]}
      menuFooter={
        <Footer
          version={version}
          reactCismapRHMVersion={reactCismapRHMVersion}
          logoUrl={footerLogoUrl}
        />
      }
    />
  );
}

export default App;
