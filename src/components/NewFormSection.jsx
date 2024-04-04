/* eslint-disable react/prop-types */
import { DeleteSectionBtn } from "./DeleteSectionBtn";

function NewFormSection({ formFor, onDelete, handleChange }) {
  return (
    <div className="form-card container">
      {formFor === "Work" && (
        <form>
          <label className="input-field-labels" htmlFor="companyName">
            Company Name
          </label>
          <input
            onChange={(e) =>
              handleChange("workInfo", "companyName", e.target.value)
            }
            className="input-field"
            id="companyName"
            type="text"
          />

          <label className="input-field-labels" htmlFor="startDate">
            Start date
          </label>
          <input
            onChange={(e) =>
              handleChange("workInfo", "startDate", e.target.value)
            }
            className="input-field"
            type="month"
            id="startDate"
          />

          <label className="input-field-labels" htmlFor="endDate">
            End date
          </label>
          <input
            onChange={(e) =>
              handleChange("workInfo", "endDate", e.target.value)
            }
            className="input-field"
            type="month"
            id="endDate"
          />

          <label className="input-field-labels" htmlFor="responsibilities">
            Responsibilities
          </label>
          <textarea
            onChange={(e) =>
              handleChange("workInfo", "responsibilities", e.target.value)
            }
            className="input-field"
            id="responsibilities"
          ></textarea>
        </form>
      )}
      {formFor === "Educational" && (
        <form>
          <label className="input-field-labels" htmlFor="study">
            Study
          </label>
          <input
            onChange={(e) =>
              handleChange("educationalInfo", "study", e.target.value)
            }
            className="input-field"
            id="study"
            type="text"
          />

          <label className="input-field-labels" htmlFor="schoolName">
            School
          </label>
          <input
            onChange={(e) =>
              handleChange("educationalInfo", "school", e.target.value)
            }
            className="input-field"
            id="schoolName"
            type="text"
          />

          <label className="input-field-labels" htmlFor="startDate">
            Start date
          </label>
          <input
            onChange={(e) =>
              handleChange("educationalInfo", "startDate", e.target.value)
            }
            className="input-field"
            type="month"
            id="startDate"
          />

          <label className="input-field-labels" htmlFor="endDate">
            End date
          </label>
          <input
            onChange={(e) =>
              handleChange("educationalInfo", "endDate", e.target.value)
            }
            className="input-field"
            type="month"
            id="endDate"
          />
        </form>
      )}
      <DeleteSectionBtn onClick={onDelete} />
    </div>
  );
}
export { NewFormSection };
