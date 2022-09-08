import React from "react";
import BusinessCard from "./BusinessCard";
export default function List(props) {
  document.body.style.backgroundColor = "#dadada";
  if (props.termData.length === 0) {
    return (
      <div className="business-list-bulbana">
        <h1>Bul Bana!</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="business-list">
        {props.termData.map((businessData) => {
          return <BusinessCard data={businessData} key={businessData.id} />;
        })}
      </div>
    </div>
  );
}
