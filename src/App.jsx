import Header from "./components/Header.jsx";
import InfoForm from "./components/InfoForm.jsx";
import MoreFields from "./components/MoreFields.jsx";
import SubmitBtn from "./components/SubmitBtn.jsx";
import SelectPage from "./components/SelectPage.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Form");
  function handleFormClick() {
    setCurrentPage("Form");
  }
  function handleViewClick() {
    setCurrentPage("View");
  }
  return (
    <>
      <Header />
      <SelectPage
        currentPage={currentPage}
        onForm={handleFormClick}
        onView={handleViewClick}
      />
      {currentPage === "Form" && (
        <>
          <InfoForm />
          <MoreFields title="Educational" />
          <MoreFields title="Work" />
          <SubmitBtn />
        </>
      )}
      {currentPage === "View" && (
        <>
          <h1>Hi</h1>
        </>
      )}
    </>
  );
}

export default App;
