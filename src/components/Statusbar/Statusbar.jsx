import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";

function StatusBar(props) {
  return (
    <StatusContainer>
      <div className="status-bar__column">
        <span>9:41AM</span>
      </div>
      <div className="status-bar__column" />
      <div className="status-bar__column">
        <span>
          <FontAwesomeIcon icon={faSignal} />
        </span>
        <span>
          <FontAwesomeIcon icon={faWifi} />
        </span>
        <span>
          <FontAwesomeIcon icon={faBatteryFull} />
        </span>
      </div>
    </StatusContainer>
  );
}

const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dadada;
  border-radius: 0.5px;
  color: #ffffff;

  .status-bar__column {
    width: 33%;
    margin: 0 5px;
  }

  .status-bar__column:nth-child(2) {
    display: flex;
  }

  .status-bar__column:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  span {
    margin-right: 6px;
  }
`;

export default StatusBar;
