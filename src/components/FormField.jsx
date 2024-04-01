/* eslint-disable react/prop-types */
export default function FormField({ id, labelName, type = "Text" }) {
  return (
    <div className="form-field">
      <label className="input-field-labels" htmlFor={id}>
        {labelName}
      </label>
      <input id={id} className="input-field" type={type} />
    </div>
  );
}
