import { useState } from "react";

import AddOn from "./AddOn";
import Button from "./Button";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import Thanks from "./Thanks";

export default function MainBar({
  curStep,
  handleMinus,
  handlePlus,
  handleConfirm,
  label,

  name,
  email,
  number,
  setName,
  setNumber,
  setEmail,

  labelEmail,
  labelName,
  labelPhone
}) {


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
          label={label}

          labelEmail={labelEmail}
          labelName={labelName}
          labelPhone={labelPhone}
        />
      )}
      {curStep === 2 && <SelectPlan />}
      {curStep === 3 && <AddOn />}
      {curStep === 4 && <Summary />}
      {curStep === null && <Thanks />}

      {curStep === null || (
        <Button
          curStep={curStep}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          handleConfirm={handleConfirm}
          personalInfo={{name, email, number}}
        />
      )}
    </main>
  );
}
