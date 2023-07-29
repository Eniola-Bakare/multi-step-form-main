import { useState } from "react";

import AddOn from "./AddOn";
import Button from "./Button";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import Thanks from "./Thanks";

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

export default function MainBar({
  curStep,
  setCurStep,
  handleMinus,
  handlePlus,
  handleConfirm,

  name,
  email,
  number,
  setName,
  setNumber,
  setEmail,

  labelEmail,
  labelName,
  labelPhone,

  price,
  planType,
  setPrice,
  setPlanType,
  addOnArrPrice,
  setAddOnArrPrice,
  planTypeObj,
  setPlanTypeObj,
}) {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [addOnState, setAddOnState] = useState(addOns.map((addOn) => false));

  return (
    <main className="main">
      {curStep === 1 && (
        <PersonalInfo
          name={name}
          setName={setName}
          setEmail={setEmail}
          setNumber={setNumber}
          email={email}
          number={number}
          labelEmail={labelEmail}
          labelName={labelName}
          labelPhone={labelPhone}
          setPrice={setPrice}
          setPlanType={setPlanType}
        />
      )}
      {curStep === 2 && (
        <SelectPlan
          setPrice={setPrice}
          setPlanType={setPlanType}
          toggleBtn={toggleBtn}
          setToggleBtn={setToggleBtn}
          price={price}
          planType={planType}
          setPlanTypeObj={setPlanTypeObj}
        />
      )}
      {curStep === 3 && (
        <AddOn
          toggleBtn={toggleBtn}
          addOnState={addOnState}
          setAddOnState={setAddOnState}
          setAddOnArrPrice={setAddOnArrPrice}
          addOns={addOns}
        />
      )}
      {curStep === 4 && (
        <Summary
          planType={planType}
          planTypeObj={planTypeObj}
          toggleBtn={toggleBtn}
          addOnArrPrice={addOnArrPrice}
          setCurStep={setCurStep}
        />
      )}
      {curStep === null && <Thanks name={name} curStep={curStep} />}

      {curStep === null || (
        <Button
          curStep={curStep}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          handleConfirm={handleConfirm}
          personalInfo={{ name, email, number }}
        />
      )}
    </main>
  );
}
