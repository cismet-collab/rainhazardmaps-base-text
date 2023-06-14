import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = ({ appName }) => {
  return (
    <GenericModalMenuSection
      sectionKey="haftungsausschluss"
      sectionTitle="Haftungsausschluss"
      sectionBsStyle="danger"
      sectionContent={
        <div>
          <p>
            Alle Informationen von der Anwendung <b>{appName}</b> erfolgen ohne
            Gewähr für ihre Richtigkeit. In keinem Fall wird für Schäden, die
            sich aus der Verwendung abgerufener Informationen oder
            Online-Services ergeben, Haftung übernommen.
          </p>
        </div>
      }
    />
  );
};
export default Component;
