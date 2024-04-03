import { useState } from "react";

export default function InfoForm() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "John",
    lastName: "Wick",
    phoneNumber: "(123)-123-123",
    email: "johnwick69@gmail.com",
  });
  function handleChange(e) {
    setGeneralInfo(e.target.value);
  }
  return (
    <div className="form-info-container container">
      <h3 className="form-info-title"> General Information </h3>
      <form className="form-info-section">
        <label className="input-field-labels" htmlFor="firstName">
          First Name
        </label>
        <input
          value={generalInfo.firstName}
          onChange={handleChange}
          id="firstName"
          className="input-field"
          type="text"
        />

        <label className="input-field-labels" htmlFor="lastName">
          Last Name
        </label>
        <input
          required
          value={generalInfo.lastName}
          onChange={handleChange}
          id="lastName"
          className="input-field"
          type="text"
        />

        <label className="input-field-labels" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          value={generalInfo.phoneNumber}
          onChange={handleChange}
          id="phoneNumber"
          className="input-field"
          type="text"
        />

        <label className="input-field-labels" htmlFor="email">
          Email
        </label>
        <input
          value={generalInfo.email}
          onChange={handleChange}
          id="email"
          className="input-field"
          type="email"
        />
      </form>
    </div>
  );
}
