import { Header } from "./components/Header.jsx";
import InfoForm from "./components/InfoForm.jsx";
import { MoreFields } from "./components/MoreFields.jsx";
import { SubmitBtn } from "./components/SubmitBtn.jsx";
import { SelectPage } from "./components/SelectPage.jsx";
import "./App.css";
import { useState } from "react";
import { ViewCv } from "./components/ViewCv.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("Form");
  const [formInfo, setFormInfo] = useState({
    generalInfo: {
      firstName: "John",
      lastName: "Wick",
      phoneNumber: "(123)-123-123",
      email: "johnwick69@gmail.com",
    },
    educationalInfo: {
      study: "",
      school: "",
      startDate: "",
      endDate: "",
    },
    workInfo: {
      companyName: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    },
  });
  function handleFormClick() {
    setCurrentPage("Form");
  }
  function handleViewClick() {
    setCurrentPage("View");
  }
  function handleEditClick() {}
  function handleSubmitClick() {}

  const handleInputChange = (key, field, value) => {
    setFormInfo({
      ...formInfo,
      [key]: {
        ...formInfo[key],
        [field]: value,
      },
    });
  };

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
          <InfoForm defaultInfo={formInfo} handleChange={handleInputChange} />
          <MoreFields title="Educational" />
          <MoreFields title="Work" />
          <SubmitBtn />
        </>
      )}
      {currentPage === "View" && (
        <>
          <ViewCv info={formInfo} />
        </>
      )}
    </>
  );
}

export default App;
