import AddOn from "./AddOn";
import Button from "./Button";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import Thanks from "./Thanks";
import { useFormContext } from "../contexts/FormContext";

export default function MainBar() {
  const { curStep } = useFormContext();
  return (
    <main className="main">
      {curStep === 1 && <PersonalInfo />}
      {curStep === 2 && <SelectPlan />}
      {curStep === 3 && <AddOn />}
      {curStep === 4 && <Summary />}
      {curStep === null && <Thanks />}
      {curStep === null || <Button />}

    </main>
  );
}
