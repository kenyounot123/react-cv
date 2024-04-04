import ViewSection from "./ViewSection";

/* eslint-disable react/prop-types */
function ViewCv({ info, onEdit }) {
  return (
    <div className="container">
      <h1>{info.generalInfo.firstName + " " + info.generalInfo.lastName}</h1>
      <h3>{info.generalInfo.phoneNumber}</h3>
      <h3>{info.generalInfo.email}</h3>
      <h1 className="view-section-title">Educational Experience</h1>
      <ViewSection section="Education" info={info} />
      <h1 className="view-section-title">Work Experience</h1>
      <ViewSection section="Work" info={info} />
      <button onClick={onEdit} className="edit-btn">
        Edit
      </button>
    </div>
  );
}

export { ViewCv };
