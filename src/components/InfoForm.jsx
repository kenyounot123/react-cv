export default function InfoForm() {
  return (
    <div className="form-info-container form-card container">
      <h3 className="form-info-title"> General Information </h3>
      <form className="form-info-section">
        <label className="input-field-labels" htmlFor="firstName">
          First Name
        </label>
        <input id="firstName" className="input-field" type="text" />

        <label className="input-field-labels" htmlFor="lastName">
          Last Name
        </label>
        <input id="lastName" className="input-field" type="text" />

        <label className="input-field-labels" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input id="phoneNumber" className="input-field" type="text" />

        <label className="input-field-labels" htmlFor="email">
          Email
        </label>
        <input id="email" className="input-field" type="email" />
      </form>
    </div>
  );
}
