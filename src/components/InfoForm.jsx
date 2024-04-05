/* eslint-disable react/prop-types*/
export default function InfoForm({ defaultInfo, handleChange }) {
  return (
    <div className="form-info-container container">
      <h3 className="form-info-title"> General Information </h3>
      <form className="form-info-section">
        <div className="first-and-last-name">
          <div className="first-name-field">
            <label className="input-field-labels" htmlFor="firstName">
              First Name
            </label>
            <input
              value={defaultInfo.generalInfo.firstName}
              onChange={(e) =>
                handleChange("generalInfo", "firstName", e.target.value)
              }
              id="firstName"
              className="input-field"
              type="text"
            />
          </div>
          <div className="last-name-field">
            <label className="input-field-labels" htmlFor="lastName">
              Last Name
            </label>
            <input
              required
              value={defaultInfo.generalInfo.lastName}
              onChange={(e) =>
                handleChange("generalInfo", "lastName", e.target.value)
              }
              id="lastName"
              className="input-field"
              type="text"
            />
          </div>
        </div>

        <div className="phone-and-email">
          <div className="phone-field">
            <label className="input-field-labels" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              value={defaultInfo.generalInfo.phoneNumber}
              onChange={(e) =>
                handleChange("generalInfo", "phoneNumber", e.target.value)
              }
              id="phoneNumber"
              className="input-field"
              type="text"
            />
          </div>
          <div className="email-field">
            <label className="input-field-labels" htmlFor="email">
              Email
            </label>
            <input
              value={defaultInfo.generalInfo.email}
              onChange={(e) =>
                handleChange("generalInfo", "email", e.target.value)
              }
              id="email"
              className="input-field"
              type="email"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
