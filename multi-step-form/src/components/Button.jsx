import { useFormContext } from "../contexts/FormContext";

export default function Button() {
  const { curStep, handleMinus, handlePlus, handleConfirm, personalInfo } =
    useFormContext();
  return (
    <section className={`btn-div ${curStep > 1 ? "plus" : ""}`}>
      {curStep !== 1 && (
        <button onClick={handleMinus} className="btn-goBack">
          Go Back
        </button>
      )}
      {curStep < 4 ? (
        <button onClick={() => handlePlus(personalInfo)} className="btn-next">
          Next Step
        </button>
      ) : (
        <button className="btn-confirm" onClick={handleConfirm}>
          Confirm
        </button>
      )}
    </section>
  );
}
