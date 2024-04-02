/* eslint-disable react/prop-types */
import { useState } from "react";
import NewFormSection from "./NewFormSection";
function AddSectionButton({ onClick }) {
  return (
    <button className="section-add-btn" onClick={onClick}>
      Add section
    </button>
  );
}
export default function MoreFields({ title }) {
  const [showSections, setShowSections] = useState(false);
  function handleClick() {
    setShowSections(true);
  }
  return (
    <div className="more-section-container container">
      <h2 className="section-title">{title} Experience</h2>
      {showSections && title === "Educational" && (
        <NewFormSection formFor="Educational" />
      )}
      {showSections && title === "Work" && <NewFormSection formFor="Work" />}
      <AddSectionButton onClick={handleClick} />
    </div>
  );
}
