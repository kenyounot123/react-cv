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
  const [formSections, setFormSections] = useState([]);

  function handleClick() {
    setFormSections([
      ...formSections,
      { id: setFormSections.length + 1, formFor: title },
    ]);
  }
  return (
    <div className="more-section-container container">
      <h2 className="section-title">{title} Experience</h2>
      {formSections.map((section) =>
        title === "Educational" ? (
          <NewFormSection key={section.id} formFor="Educational" />
        ) : (
          <NewFormSection key={section.id} formFor="Work" />
        )
      )}
      <AddSectionButton onClick={handleClick} />
    </div>
  );
}
