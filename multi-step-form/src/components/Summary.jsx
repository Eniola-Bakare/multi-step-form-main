export default function Summary() {
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
              Arcade (Monthly)<br />
              <span className="cart-plan-change">Change</span>
            </p>
            <p className="cart-plan-price">$9/mo</p>
          </div>
          <div className="cart-addOn">
            <p className="cart-addOn-type">Online service</p>
            <p className="cart-addOn-price"> +$1/mo</p>
          </div>
        </div>

        <div className="cart-total">
          <p className="cart-total-title">Total (per month)</p>
          <p className="cart-total-price">$12/mo</p>
        </div>
      </div>
    </section>
  );
}
