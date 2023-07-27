const steps = [
  { id: 1, title: "Your info" },
  { id: 2, title: "Select Plan" },
  { id: 3, title: "Add-ons" },
  { id: 4, title: "Summary" },
];
const mappedSteps = steps.map((step) => (
  <div className="step-div" key={step.id}>
    <div className="step-number-div">
      <p className="step-number">{step.id}</p>
    </div>
    <div>
      <p className="step-num-text">Step {step.id}</p>
      <p className="step-title">{step.title}</p>
    </div>
  </div>
));
export default function SideBar() {
  return <aside className="side-bar">{mappedSteps}</aside>;
}
