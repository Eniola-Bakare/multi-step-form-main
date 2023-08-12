import { useFormContext } from "../contexts/FormContext";

export default function SideBar() {
  const { steps, curStep, handleCurStep } = useFormContext();
  return (
    <aside className="side-bar">
      {steps.map((step) => (
        <div
          className="step-div"
          key={step.id}
          onClick={() => handleCurStep(step.id)}
        >
          <div
            className={`step-number-div ${step.id === curStep ? "active" : ""}`}
          >
            <p className={`step-number ${step.id === curStep ? "active" : ""}`}>
              {step.id}
            </p>
          </div>
          <div className="side-Texts">
            <p className="step-num-text">Step {step.id}</p>
            <p className="step-title">{step.title}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}
