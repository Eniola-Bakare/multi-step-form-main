import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const plans = [
  {
    image: arcade,
    title: "Arcade",
    price: "$9/mo",
    free: "2 months free"
  },
  {
    image: advanced,
    title: "Arcade",
    price: "$12/mo",
    free: "2 months free"
  },
  {
    image: pro,
    title: "Pro",
    price: "$15/mo",
    free: "2 months free"
  },
];

export default function SelectPlan() {
  return (
    <section className="selectPlan-container">
      <div className="selectPlan-title-div">
        <h1 className="selectPlan-title">Select your plan</h1>
        <p className="selectPlan-text">
          You have the option of monthly or year billing.
        </p>
      </div>

      <div className="plan-cards">
        {plans.map((plan, i) => {
          return (
            <div className="plan-card" key={i + 3}>
              <img className="plan-image" src={plan.image} alt={plan.title} />
              <p className="plan-title">{plan.title}</p>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-year-free">{plan.free}</p>
            </div>
          );
        })}
      </div>

      <div className="plan-type-div">
        <p>
          <span className="plan-type">Monthly</span>
          <span> -- </span>
          <span className="plan-type">Yearly</span>
        </p>
      </div>
    </section>
  );
}
