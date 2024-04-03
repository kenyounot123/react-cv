/* eslint-disable react/prop-types */
function DeleteSectionBtn({ onClick }) {
  return (
    <button type="button" className="delete-section-btn" onClick={onClick}>
      Remove section
    </button>
  );
}
export { DeleteSectionBtn };
