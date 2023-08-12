import { useState } from "react";

import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useFormContext } from "../contexts/FormContext";

const plans = [
  {
    image: arcade,
    title: "Arcade",
    price: 9,
  },
  {
    image: advanced,
    title: "Advanced",
    price: 12,
  },
  {
    image: pro,
    title: "Pro",
    price: 15,
  },
];

export default function SelectPlan() {
  const { labelPlan } = useFormContext();
  const {
    planType,
    setPrice,
    setPlanType,
    toggleBtn,
    setToggleBtn,
    setPlanTypeObj,
  } = useFormContext();
  const [plansArr, setPlansArr] = useState([...plans]);

  function handleToggle() {
    setPlansArr(plansArr);
    setToggleBtn((prev) => !prev);
  }
  function handleDetails(price, title, plan) {
    setPlanType(title);
    setPrice(price);
    setPlanTypeObj(plan);
  }
  return (
    <section className="selectPlan-container">
      <div className="selectPlan-title-div">
        <h1 className="selectPlan-title">Select your plan</h1>
        <p className="selectPlan-text">
          You have the option of monthly or year billing.
        </p>
      </div>
      {labelPlan && (
        <label
          className="personalInfo-label error"
          style={{
            color: "red",
            marginBottom: "10px",
            fontWeight: "500",
            marginTop: "20px",
            alignSelf: "flex-start",
          }}
        >
          * Selecting a plan is required.
        </label>
      )}

      <div className="plan-cards">
        {plansArr.map((plan, i) => {
          return (
            <div
              className="plan-card"
              key={i + 3}
              onClick={() => handleDetails(plan.price, plan.title, plan)}
              style={{
                border:
                  planType === plan.title
                    ? "1.5px solid hsl(243, 100%, 62%)"
                    : "1px solid hsl(231, 11%, 63%)",
                scale: planType === plan.title ? "1.1" : "1",
              }}
            >
              <img className="plan-image" src={plan.image} alt={plan.title} />
              <div className="plan-texts">
                <p className="plan-title">{plan.title}</p>
                <p className="plan-price">{`$${
                  toggleBtn ? plan.price * 10 : plan.price
                }/${toggleBtn ? "yr" : "mo"}`}</p>
                {toggleBtn ? (
                  <p className="plan-year-free">2 months free</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="plan-type-div">
        <span
          className="plan-type"
          style={{
            color: `${
              !toggleBtn ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"
            }`,
          }}
        >
          Monthly
        </span>
        <div className="toggle" onClick={handleToggle}>
          {!toggleBtn ? (
            <div className="toggle-left"></div>
          ) : (
            <div className="toggle-right"></div>
          )}
        </div>
        <span
          className="plan-type"
          style={{
            color: `${toggleBtn ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}`,
          }}
        >
          Yearly
        </span>
      </div>
    </section>
  );
}
