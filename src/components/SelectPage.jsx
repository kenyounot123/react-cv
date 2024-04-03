/*eslint-disable react/prop-types*/
export default function SelectPage({ onForm, onView, currentPage }) {
  return (
    <div className="select-page-container">
      <button
        onClick={onForm}
        className={currentPage === "Form" ? "selected view-page" : "view-page"}
      >
        Form
      </button>
      <button
        onClick={onView}
        className={currentPage === "View" ? "selected view-page" : "view-page"}
      >
        View
      </button>
    </div>
  );
}
