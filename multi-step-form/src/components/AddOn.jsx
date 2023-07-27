const addOns = [
  { title: "Online service", desc: "Access to multiplayer games", price: 1 },
  { title: "Large storage", desc: " Extra storage", price: 2 },
  {
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];

export default function AddOn() {
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
            <div className="addOn-item" key={i * 3}>
              <div className="addOn-check">
                <input type="checkbox" className="addOn-check-input" />
                <div className="addOn-text">
                  <p className="addOn-text-title">{addOn.title}</p>
                  <p className="addOn-text-desc">{addOn.desc}</p>
                </div>
              </div>
              <p className="addOn-price">+${addOn.price}/mo</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
