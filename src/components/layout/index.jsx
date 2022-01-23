import React from "react";
import "./style.scss";

import ProgressSteps from "../progressSteps";

export default function Layout({ children }) {
  return (
    <div className="container">
      {children}

      <ProgressSteps />
    </div>
  );
}
