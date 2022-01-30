import React from "react";

export const BreadCrumbs = (props) => {
  const len = props?.crumbs?.length;

  return (
    <div className="crumbs-contain">
      {props?.crumbs?.map((crumb, i) => (
        <div className="crumb" key={i}>
          <span>{crumb}</span>
          <span>{i !== len - 1 && "/"}</span>
        </div>
      ))}
    </div>
  );
};
