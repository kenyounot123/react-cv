import ViewSection from "./ViewSection";

/* eslint-disable react/prop-types */
function ViewCv({ info, onEdit }) {
  return (
    <div className="container">
      <ViewSection section="General Info" info={info} />
      <ViewSection section="Education" info={info} />
      <ViewSection section="Work" info={info} />
      <button onClick={onEdit} className="edit-btn">
        Edit
      </button>
    </div>
  );
}

export { ViewCv };
