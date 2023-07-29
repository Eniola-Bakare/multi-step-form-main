import { useState } from "react";
import MainBar from "./components/MainBar";
import SideBar from "./components/SideBar";

const steps = [
  { id: 1, title: "Your info" },
  { id: 2, title: "Select Plan" },
  { id: 3, title: "Add-ons" },
  { id: 4, title: "Summary" },
];
const addOns = [
  {
    title: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
    id: 0,
  },
  { title: "Large storage", desc: " Extra storage", price: 2, id: 1 },
  {
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 2,
    id: 2,
  },
];

function App() {
  const [curStep, setCurStep] = useState(1);

  const [labelEmail, setLabelEmail] = useState(false);
  const [labelName, setLabelName] = useState(false);
  const [labelPhone, setLabelPhone] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [price, setPrice] = useState("");
  const [planType, setPlanType] = useState("");
  const [planTypeObj, setPlanTypeObj] = useState({});

  const [addOnArrPrice, setAddOnArrPrice] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [addOnState, setAddOnState] = useState(addOns.map((addOn) => false));

  //////////////////////////////////////////////////////////// side bar functionality
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
    ///////////////////////////////////////////////// Validation for step 2
    if (curStep === 2) {
      if (setStep === 1) {
        setCurStep(setStep);
      } else if (!price || !planType) return;
    }

    // //////////////////////////////////////////////////////// for last step
    if (curStep === null) {
      setCurStep(1);
      setStep = 1;
      setName("");
      setEmail("");
      setNumber("");
      setPrice("");
      setPlanType("");
      setPlanTypeObj({});
      setAddOnArrPrice([]);
      setToggleBtn(false);
      setAddOnState(addOns.map((addOn) => false));
    }

    // //////////////////////////////////////////////////////// changing the sidebar number to the current view
    setCurStep(setStep);
  }

  //////////////////////////////////////// main component prev && next functionalities
  function handleMinus() {
    setCurStep((prevStep) => --prevStep);
  }
  function handlePlus({ name, email, number }) {
    ///////////////////////////////////////////////////////////////// Validation for step 1
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

    setCurStep((prevStep) => ++prevStep);
  }
  function handleConfirm() {
    setTimeout(() => {
      setCurStep(null);
    }, 1500);
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
        handleCurStep={handleCurStep}
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
        toggleBtn={toggleBtn}
        setToggleBtn={setToggleBtn}
        addOnState={addOnState}
        setAddOnState={setAddOnState}
        addOns={addOns}
      />
    </div>
  );
}

export default App;
