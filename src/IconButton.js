import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButton = ({ Icon, children }) => {
  return (
    <>
      {!children && (
        <button className="round-btn">
          <FontAwesomeIcon icon={Icon} />
        </button>
      )}
      {!!children && (
        <button className="full-btn">
          <FontAwesomeIcon icon={Icon} />
          <span>{children}</span>
        </button>
      )}
    </>
  );
};
