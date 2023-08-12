import thankYou from "../assets/images/icon-thank-you.svg";
import { useFormContext } from "../contexts/FormContext";

export default function Thanks() {
  const { firstName, handleCurStep } = useFormContext();
  return (
    <section className="thankYou-container" onClick={() => handleCurStep(1)}>
      <img className="thankYou-img" src={thankYou} alt="check icon" />
      <div className="thankYou-title-div">
        <h1 className="thankYou-title">Thank You, {firstName}!</h1>
        <p className="thankYou-text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}
