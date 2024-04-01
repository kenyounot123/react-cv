/* eslint-disable react/prop-types */
export default function MoreFields({ title }) {
  return (
    <div className="more-section-container container">
      <h2 className="section-title">{title}</h2>
      <button className="section-add-btn">Add Section</button>
    </div>
  );
}
