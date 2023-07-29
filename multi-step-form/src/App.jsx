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

  const [name, setName] = useState("EniolaOluwa Bakare");
  const [email, setEmail] = useState("eebakare@gmail.com");
  const [number, setNumber] = useState("09016248463");

  const [price, setPrice] = useState("");
  const [planType, setPlanType] = useState("");
  const [planTypeObj, setPlanTypeObj] = useState({});

  const [addOnArrPrice, setAddOnArrPrice] = useState([]);

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
    // Validation for step 2
    if (curStep === 2) {
      if (!price || !planType) return;
    }
    setCurStep(setStep);
  }
  function handleMinus() {
    setCurStep((prevStep) => --prevStep);
  }
  function handlePlus({ name, email, number }) {
    // Validation for step 1
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

    //////////////////////////////////////////////////////////// Validation for step 2
    if (curStep === 2) {
      if (!price || !planType) return;
    }
    ////////////////////////////////////////////////////////// Validation for step 3
    if (curStep === 3) {
      console.log(addOnArrPrice, "addon obj");
      console.log(planTypeObj, planType, "plan type", typeof planTypeObj);
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
        setCurStep={setCurStep}
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
        price={price}
        setPrice={setPrice}
        planType={planType}
        setPlanType={setPlanType}
        addOnArrPrice={addOnArrPrice}
        setAddOnArrPrice={setAddOnArrPrice}
        setPlanTypeObj={setPlanTypeObj}
        planTypeObj={planTypeObj}
      />
    </div>
  );
}

export default App;
