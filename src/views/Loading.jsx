import React from "react";
import "../css/Loading.css";

function Loading() {
  return (
    <div className="centrar">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loading;
