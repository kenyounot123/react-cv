/* eslint-disable react/prop-types */
import DeleteSectionBtn from "./DeleteSectionBtn";

export default function NewFormSection({ formFor }) {
  return (
    <div>
      {formFor === "Educational" && (
        <form>
          <label htmlFor="companyName">Company Name</label>
          <input id="companyName" type="text" />

          <label htmlFor="startDate">Start date</label>
          <input type="date" id="startDate" />

          <label htmlFor="endDate">End date</label>
          <input type="date" id="endDate" />

          <label htmlFor="responsibilities">Responsibilities</label>
          <input type="textarea" id="responsibilities" />
        </form>
      )}
      {formFor === "Work" && (
        <form>
          <label htmlFor="study">Study</label>
          <input id="study" type="text" />

          <label htmlFor="schoolName">School</label>
          <input id="schoolName" type="text" />

          <label htmlFor="startDate">Start date</label>
          <input type="date" id="startDate" />

          <label htmlFor="endDate">End date</label>
          <input type="date" id="endDate" />
        </form>
      )}
      <DeleteSectionBtn />
    </div>
  );
}
