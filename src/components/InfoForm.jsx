import FormField from "./FormField";
export default function InfoForm() {
  return (
    <div>
      <h3 className="form-info-title"> General Information </h3>
      <form className="form-info-section">
        <FormField id="firstName" labelName={"First Name"} />
        <FormField id="lastName" labelName={"Last Name"} />
        <FormField id="phoneNumber" labelName={"Phone Number"} />
        <FormField id="email" labelName={"Email"} type={"email"} />
      </form>
    </div>
  );
}
