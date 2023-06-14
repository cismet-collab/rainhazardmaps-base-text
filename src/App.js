import "./App.css";
import GenericModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import {
  Help05Introduction,
  Help20Karteninhalt,
  Help80ModellfehlerMelden,
  Help90Haftungsausschluss,
  Help99Footer,
} from "./lib";
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
      menuIntroduction={<Help05Introduction />}
      menuIcon="info"
      menuTitle="Kompaktanleitung und Hintergrundinformationen"
      menuSections={[
        <Help20Karteninhalt key="Karteninhalt" />,
        <Help90Haftungsausschluss key="Haftungsausschluss" />,
        <Help80ModellfehlerMelden key="ModellfehlerMelden" />,
      ]}
      menuFooter={
        <Help99Footer
          version={version}
          reactCismapRHMVersion={reactCismapRHMVersion}
          logoUrl={footerLogoUrl}
        />
      }
    />
  );
}

export default App;
