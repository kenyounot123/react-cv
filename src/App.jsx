import Header from "./components/Header.jsx";
import InfoForm from "./components/InfoForm.jsx";
import MoreFields from "./components/MoreFields.jsx";
import SubmitBtn from "./components/SubmitBtn.jsx";
import SelectPage from "./components/SelectPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SelectPage />
      <InfoForm />
      <MoreFields title="Educational" />
      <MoreFields title="Work" />
      <SubmitBtn />
    </>
  );
}

export default App;
