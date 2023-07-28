import { useState } from "react";
import MainBar from "./components/MainBar";
import SideBar from "./components/SideBar";

const steps = [
  { id: 1, title: "Your info" },
  { id: 2, title: "Select Plan" },
  { id: 3, title: "Add-ons" },
  { id: 4, title: "Summary" },
];

function App() {
  const [curStep, setCurStep] = useState(1);

  const [labelEmail, setLabelEmail] = useState(false);
  const [labelName, setLabelName] = useState(false);
  const [labelPhone, setLabelPhone] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  function handleCurStep(setStep) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.split(" ").length < 2) {
      setLabelName(true);
      return;
    } else {
      setLabelName(false);
    }
    if (!email || email.length === 0 || email.length > 0) {
      if (!emailPattern.test(email)) {
        setLabelEmail(true);
        return;
      } else {
        setLabelEmail(false);
      }
    }
    if (!number || number.length < 8) {
      setLabelPhone(true);
      return;
    } else {
      setLabelPhone(false);
    }
    setCurStep(setStep);
  }
  function handleMinus() {
    setCurStep((prevStep) => --prevStep);
  }
  function handlePlus({ name, email, number }) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.split(" ").length < 2) {
      setLabelName(true);
      return;
    } else {
      setLabelName(false);
    }
    if (!email || email.length === 0 || email.length > 0) {
      if (!emailPattern.test(email)) {
        setLabelEmail(true);
        return;
      } else {
        setLabelEmail(false);
      }
    }
    if (!number || number.length < 8) {
      setLabelPhone(true);
      return;
    } else {
      setLabelPhone(false);
    }

      setCurStep((prevStep) => ++prevStep);
    
  }
  function handleConfirm() {
    setCurStep(null);
  }

  return (
    <div className="app">
      <SideBar steps={steps} curStep={curStep} addClick={handleCurStep} />
      <MainBar
        curStep={curStep}
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        handleConfirm={handleConfirm}
        confirm={confirm}

        name={name}
        setName={setName}
        setEmail={setEmail}
        setNumber={setNumber}
        email={email}
        number={number}
        labelEmail={labelEmail}
        labelName={labelName}
        labelPhone={labelPhone}
      />
    </div>
  );
}

export default App;
