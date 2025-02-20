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
import { getLibDescribe, getLibVersion, isDirty } from "./version";
import cLogo from "./lib/help/assets/orangenesC512.png";
function App() {
  const version = "5e3a";
  const reactCismapRHMVersion = "0.0.0";
  const footerLogoUrl = undefined;

  const { setAppMenuVisible, setAppMenuActiveMenuSection } =
    useContext(UIDispatchContext);
  useEffect(() => {
    setAppMenuVisible(true);
  }, [setAppMenuVisible]);
  return (
    <div>
      {"@cismet-collab/rainhazardmaps-base-texts@" +
        getLibVersion() +
        (isDirty()
          ? " (dirty: release before usage[" + getLibDescribe() + "])"
          : "(ready to use)")}
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
            versionString={"#" + version}
            reactCismapRHMVersion={reactCismapRHMVersion}
            logoUrl={footerLogoUrl}
            logo={
              <a
                className="renderAsLink"
                onClick={() => {
                  setAppMenuActiveMenuSection("haftungsausschluss");
                }}
              >
                <img
                  style={{ width: 70, margin: 5, cursor: "pointer" }}
                  align="right"
                  src={cLogo}
                />
              </a>
            }
          />
        }
      />
    </div>
  );
}

export default App;
