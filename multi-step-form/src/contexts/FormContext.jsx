import { createContext, useContext, useState } from "react";

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
const FormContext = createContext();

function FormContextProvider({ children }) {
  const [curStep, setCurStep] = useState(1);

  const [labelEmail, setLabelEmail] = useState(false);
  const [labelFirstName, setLabelFirstName] = useState(false);
  const [labelLastName, setLabelLastName] = useState(false);
  const [labelPhone, setLabelPhone] = useState(false);
  const [labelPlan, setLabelPlan] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [price, setPrice] = useState("");
  const [planType, setPlanType] = useState("");
  const [planTypeObj, setPlanTypeObj] = useState({});

  const [addOnArrPrice, setAddOnArrPrice] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [addOnState, setAddOnState] = useState(addOns.map((addOn) => false));
  const personalInfo = { firstName, lastName, email, number };

  //////////////////////////////////////////////////////////// side bar functionality
  function handleCurStep(setStep) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || firstName.length < 3) {
      setLabelFirstName(true);
      return;
    } else {
      setLabelFirstName(false);
    }
    if (!lastName || lastName.length < 3) {
      setLabelLastName(true);
      return;
    } else {
      setLabelLastName(false);
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
      setFirstName("");
      setLastName("");
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
  function handlePlus({ firstName, lastName, email, number }) {
    ///////////////////////////////////////////////////////////////// Validation for step 1
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!firstName || firstName.length < 3) {
      setLabelFirstName(true);
      return;
    } else {
      setLabelFirstName(false);
    }
    if (!lastName || lastName.length < 3) {
      setLabelLastName(true);
      return;
    } else {
      setLabelLastName(false);
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
      if (!price || !planType) {
        setLabelPlan(true);
        return;
      }
    }

    setCurStep((prevStep) => ++prevStep);
  }
  function handleConfirm() {
    setTimeout(() => {
      setCurStep(null);
    }, 1500);
  }

  return (
    <FormContext.Provider
      value={{
        steps,
        curStep,
        setCurStep,
        handleMinus,
        handlePlus,
        handleConfirm,
        handleCurStep,

        firstName,
        lastName,
        email,
        number,
        setLastName,
        setFirstName,
        setNumber,
        setEmail,

        labelEmail,
        labelFirstName,
        labelLastName,
        labelPhone,
        labelPlan,

        price,
        planType,
        setPrice,
        setPlanType,
        addOnArrPrice,
        setAddOnArrPrice,
        planTypeObj,
        setPlanTypeObj,
        toggleBtn,
        setToggleBtn,
        addOnState,
        setAddOnState,
        addOns,
        personalInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useFormContext() {
  const values = useContext(FormContext);
  if (!values)
    throw new Error("The form context was used outside of the form provider");

  return values;
}

export { FormContextProvider, useFormContext };
