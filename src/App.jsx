import Header from "./components/Header.jsx";
import InfoForm from "./components/InfoForm.jsx";
import "./App.css";
import MoreFields from "./components/MoreFields.jsx";
import SubmitBtn from "./components/SubmitBtn.jsx";

function App() {
  return (
    <>
      <Header />
      <InfoForm />
      <MoreFields title="Educational" />
      <MoreFields title="Work" />
      <SubmitBtn />
    </>
  );
}

export default App;
