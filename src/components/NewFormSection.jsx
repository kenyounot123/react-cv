/* eslint-disable react/prop-types */
import DeleteSectionBtn from "./DeleteSectionBtn";

export default function NewFormSection({ formFor, onDelete }) {
  return (
    <div className="form-card container">
      {formFor === "Educational" && (
        <form>
          <label className="input-field-labels" htmlFor="companyName">
            Company Name
          </label>
          <input className="input-field" id="companyName" type="text" />

          <label className="input-field-labels" htmlFor="startDate">
            Start date
          </label>
          <input className="input-field" type="month" id="startDate" />

          <label className="input-field-labels" htmlFor="endDate">
            End date
          </label>
          <input className="input-field" type="month" id="endDate" />

          <label className="input-field-labels" htmlFor="responsibilities">
            Responsibilities
          </label>
          <textarea className="input-field" id="responsibilities"></textarea>
        </form>
      )}
      {formFor === "Work" && (
        <form>
          <label className="input-field-labels" htmlFor="study">
            Study
          </label>
          <input className="input-field" id="study" type="text" />

          <label className="input-field-labels" htmlFor="schoolName">
            School
          </label>
          <input className="input-field" id="schoolName" type="text" />

          <label className="input-field-labels" htmlFor="startDate">
            Start date
          </label>
          <input className="input-field" type="month" id="startDate" />

          <label className="input-field-labels" htmlFor="endDate">
            End date
          </label>
          <input className="input-field" type="month" id="endDate" />
        </form>
      )}
      <DeleteSectionBtn onClick={onDelete} />
    </div>
  );
}
