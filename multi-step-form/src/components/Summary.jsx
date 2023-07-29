export default function Summary({
  planTypeObj,
  toggleBtn,
  addOnArrPrice,
  setCurStep,
}) {
  const price = toggleBtn ? planTypeObj.price * 10 : planTypeObj.price;
  const addOnTotal = addOnArrPrice.reduce((acc, cur) => {
    return toggleBtn ? (acc += cur.price * 10) : (acc += cur.price);
  }, price);
  return (
    <section className="summary-container">
      <div className="summary-title-div">
        <h1 className="summary-title">Finishing up</h1>
        <p className="summary-text">
          Double check everything looks OK before confirming
        </p>
      </div>

      <div className="cart-details">
        <div className="cart-plan-addOn">
          <div className="cart-plan-div">
            <p className="cart-plan-type">
              {planTypeObj.title} ({toggleBtn ? "Yearly" : "Monthly"})<br />
              <span className="cart-plan-change" onClick={() => setCurStep(2)}>
                Change
              </span>
            </p>
            <p className="cart-plan-price">
              ${price}/{toggleBtn ? "yr" : "mo"}
            </p>
          </div>
          {addOnArrPrice?.map((addOn, i) => {
            return (
              <div className="cart-addOn" key={i}>
                <p className="cart-addOn-type">{addOn.title}</p>
                <p className="cart-addOn-price">
                  +${toggleBtn ? addOn.price * 10 : addOn.price}/
                  {toggleBtn ? "yr" : "mo"}
                </p>
              </div>
            );
          })}
        </div>

        <div className="cart-total">
          <p className="cart-total-title">
            Total per ({toggleBtn ? "yr" : "mo"})
          </p>
          <p className="cart-total-price">
            ${addOnTotal}/{toggleBtn ? "Year" : "Month"}
          </p>
        </div>
      </div>
    </section>
  );
}
