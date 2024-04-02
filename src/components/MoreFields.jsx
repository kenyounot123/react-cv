/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
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

  function handleDelete(id) {
    const updatedSections = formSections.filter((section) => section.id !== id);
    setFormSections(updatedSections);
  }
  function handleClick() {
    const randomKey = uuidv4();
    setFormSections([...formSections, { id: randomKey, formFor: title }]);
  }
  return (
    <div className="more-section-container container">
      <h2 className="section-title">{title} Experience</h2>
      {formSections.map((section) =>
        title === "Educational" ? (
          <NewFormSection
            key={section.id}
            onDelete={() => handleDelete(section.id)}
            formFor="Educational"
          />
        ) : (
          <NewFormSection
            key={section.id}
            onDelete={() => handleDelete(section.id)}
            formFor="Work"
          />
        )
      )}
      <AddSectionButton onClick={handleClick} />
    </div>
  );
}
