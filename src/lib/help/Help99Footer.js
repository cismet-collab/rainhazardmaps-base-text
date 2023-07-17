import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { version as reactCismapVersion } from "react-cismap/meta";
import { CustomizationContext } from "react-cismap/contexts/CustomizationContextProvider";

const Comp = ({
  appName = "Starkregengefahrenkarte",
  hintergrundkartenText = "DOP © RVR | Stadtkarte 2.0 © RVR | WebAtlasDE © BKG",
  taglineModelling = (
    <div>
      <b>Modellierung und AIS Starkregenvorsorge</b> (Version 1.0 | 04/2021):{" "}
      <a target="_wsw" href="https://cismet.de/">
        cismet GmbH
      </a>{" "}
      |{" "}
      <a target="_pecher" href="https://www.pecher.de/">
        Dr. Pecher AG (Gelsenkirchen/Erkrath)
      </a>
    </div>
  ),

  version = "???",
  reactCismapRHMVersion = "???",
  logoUrl,
  defaultContextValues = {},
}) => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);
  const customizations =
    useContext(CustomizationContext) || defaultContextValues;
  let footerContent = customizations?.helpmenu?.footerContent;
  return (
    footerContent || (
      <div style={{ fontSize: "11px" }}>
        {logoUrl && (
          <img
            alt="aislogo"
            src={logoUrl}
            style={{ width: 150, margin: 5 }}
            align="right"
          />
        )}
        <b>Hintergrundkarten</b>: {hintergrundkartenText}{" "}
        <a
          className="renderAsLink"
          onClick={() => setAppMenuActiveMenuSection("datengrundlage")}
        >
          (Details und Nutzungsbedingungen)
        </a>
        <br />
        {taglineModelling}
        <div>
          <b>
            {appName} v{version}
          </b>{" "}
          powered by{" "}
          <a href="https://cismet.de/" target="_cismet">
            cismet GmbH
          </a>{" "}
          auf Basis von{" "}
          <a href="http://leafletjs.com/" target="_more">
            Leaflet
          </a>{" "}
          und{" "}
          <a
            href="https://cismet.de/#refs"
            title={
              "react-cismap v" +
              reactCismapVersion +
              "\nreact-cismap-rainhazadmaps v" +
              reactCismapRHMVersion
            }
            target="_cismet"
          >
            cismap | rainhazardmaps v{reactCismapRHMVersion}
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cismet.de/datenschutzerklaerung.html"
          >
            Datenschutzerklärung (Privacy Policy)
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cismet.de/impressum.html"
          >
            Impressum
          </a>
        </div>
      </div>
    )
  );
};

export default Comp;
