/* eslint-disable react/prop-types */
import { useState } from "react";
function AddSectionButton({ onClick, children }) {
  return (
    <button className="section-add-btn" onClick={onClick}>
      {children}
    </button>
  );
}
export default function MoreFields({ title }) {
  const [showSection, setShowSection] = useState(false);
  function handleClick() {}
  return (
    <div className="more-section-container container">
      <h2 className="section-title">{title}</h2>
      <AddSectionButton>Add Section</AddSectionButton>
    </div>
  );
}
