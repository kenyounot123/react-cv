export default function FormField({ id, labelName, type = "Text" }) {
  return (
    <div className="formField">
      <label htmlFor={id}>{labelName}</label>
      <input id={id} className="input-field" type={type} />
    </div>
  );
}
