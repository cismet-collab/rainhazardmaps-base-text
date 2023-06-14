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
import { getLibVersion, isDirty } from "./version";
function App() {
  const version = "0.0.0";
  const reactCismapRHMVersion = "0.0.0";
  const footerLogoUrl = undefined;
  const { setAppMenuVisible } = useContext(UIDispatchContext);
  useEffect(() => {
    setAppMenuVisible(true);
  }, [setAppMenuVisible]);
  return (
    <div>
      {"@cismet-collab/rainhazardmaps-base-text@" +
        getLibVersion() +
        (isDirty() ? " (dirty)" : "")}
      <GenericModalApplicationMenu
        menuIntroduction={<Help05Introduction />}
        menuIcon="info"
        menuTitle="Gemeinsam genutzte Textbausteine der Starkregengefahrenkarten"
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
    </div>
  );
}

export default App;
