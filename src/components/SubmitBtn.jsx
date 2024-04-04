function SubmitBtn({ onClick }) {
  return (
    <div className="submit-btn-container">
      <button onClick={onClick} className="submit-btn">
        {" "}
        Submit
      </button>
    </div>
  );
}
export { SubmitBtn };
