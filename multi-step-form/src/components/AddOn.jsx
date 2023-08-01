export default function AddOn({
  toggleBtn,
  setAddOnArrPrice,
  addOnState,
  setAddOnState,
  addOns,
}) {
  function HandleAddOn(id, addOn) {
    setAddOnState((prev) => {
      return prev.map((each, i) => (i === id ? !each : each));
    });

    setAddOnArrPrice((prev) => {
      return !addOnState[id]
        ? [...prev, addOn]
        : prev.filter((each) => each.id !== id);
    });
  }
  return (
    <section className="addOn-container">
      <div className="addOn-title-div">
        <h1 className="addOn-title">Pick add-ons</h1>
        <p className="addOn-title-text">
          Add ons help enhance gaming experience
        </p>
      </div>

      <div className="addOns-div">
        {addOns.map((addOn, i) => {
          return (
            <div
              className="addOn-item"
              key={i * 3}
              id={i}
              style={{
                border: addOnState[i]
                  ? "1.5px solid hsl(243, 100%, 62%)"
                  : "1.25px solid hsl(229, 24%, 87%)",
              }}
            >
              <div
                className="addOn-check"
                onClick={() => HandleAddOn(i, addOn)}
              >
                <input
                  type="checkbox"
                  className="addOn-check-input"
                  id={`addOnCheckbox${i}`}
                  style={{
                    accentColor: addOnState[i]
                      ? "hsl(243, 100%, 62%)"
                      : "white",
                  }}
                  checked={addOnState[i]}
                  onChange={() => HandleAddOn(i, addOn)}
                />
                <div className="addOn-text">
                  <p className="addOn-text-title">{addOn.title}</p>
                  <p className="addOn-text-desc">{addOn.desc}</p>
                </div>
              </div>
              <p className="addOn-price">
                +${toggleBtn ? addOn.price * 10 : addOn.price}/
                {toggleBtn ? "yr" : "mo"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
