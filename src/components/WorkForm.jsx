export default function NewFormSection() {
  return (
    <div>
      <form>
        <label htmlFor="study"></label>
        <input id="study" type="text" />

        <label htmlFor="schoolName"></label>
        <input id="schoolName" type="text" />

        <label htmlFor="startDate"></label>
        <input type="date" id="startDate" />

        <label htmlFor="endDate"></label>
        <input type="date" id="endDate" />
      </form>
    </div>
  );
}
