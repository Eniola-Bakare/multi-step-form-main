import thankYou from "../assets/images/icon-thank-you.svg";

export default function Thanks({ name, handleCurStep }) {
  return (
    <section className="thankYou-container" onClick={() => handleCurStep(1)}>
      <img className="thankYou-img" src={thankYou} alt="check icon" />
      <div className="thankYou-title-div">
        <h1 className="thankYou-title">Thank You, {name.split(" ")[0]}!</h1>
        <p className="thankYou-text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}
