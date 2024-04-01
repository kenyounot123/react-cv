export default function NewFormSection() {
  return (
    <div>
      <form>
        <label htmlFor="companyName"></label>
        <input id="companyName" type="text" />

        <label htmlFor="startDate"></label>
        <input type="date" id="startDate" />

        <label htmlFor="endDate"></label>
        <input type="date" id="endDate" />

        <label htmlFor="responsibilities"></label>
        <input type="textarea" id="responsibilities" />
      </form>
    </div>
  );
}
