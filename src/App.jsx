import Header from "./components/Header.jsx";
import InfoForm from "./components/InfoForm.jsx";
import "./App.css";
import MoreFields from "./components/MoreFields.jsx";

function App() {
  return (
    <>
      <Header />
      <InfoForm />
      <MoreFields title="Educational Experience" />
      <MoreFields title="Work Experience" />
    </>
  );
}

export default App;
