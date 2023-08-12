import { useFormContext } from "../contexts/FormContext";
import Button from "./Button";

export default function PersonalInfo() {
  const {
    curStep,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    email,
    number,
    setNumber,
    setEmail,

    labelEmail,
    labelFirstName,
    labelLastName,
    labelPhone,
  } = useFormContext();
  return (
    <section className="personalInfo-container">
      <div className="personalInfo-title-div">
        <h1 className="personalInfo-title">Personal Info</h1>
        <p className="personalInfo-text">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="personalInfo-Form">
        <label className="personalInfo-label">First Name</label>
        <input
          className="personalInfo-input"
          type="text"
          placeholder="e.g. Stephen King"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{
            border: ` ${
              labelFirstName ? "1px solid red" : "1px solid hsl(229, 24%, 87%)"
            }`,
          }}
        />
        {labelFirstName && (
          <label
            className="personalInfo-label error"
            style={{ color: "red", marginBottom: "10px", fontWeight: "500" }}
          >
            * First Name is required.
          </label>
        )}
        <label className="personalInfo-label">Last Name</label>
        <input
          className="personalInfo-input"
          type="text"
          placeholder="e.g. Stephen King"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{
            border: ` ${
              labelLastName ? "1px solid red" : "1px solid hsl(229, 24%, 87%)"
            }`,
          }}
        />
        {labelLastName && (
          <label
            className="personalInfo-label error"
            style={{ color: "red", marginBottom: "10px", fontWeight: "500" }}
          >
            * Last Name is required.
          </label>
        )}

        <label className="personalInfo-label">Email Address</label>
        <input
          className="personalInfo-input"
          type="email"
          placeholder="e.g. Stephenking@lorem.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: ` ${
              labelEmail ? "1px solid red" : "1px solid hsl(229, 24%, 87%)"
            }`,
          }}
        />
        {labelEmail && (
          <label
            className="personalInfo-label error"
            style={{ color: "red", marginBottom: "10px", fontWeight: "500" }}
          >
            * Email is required.
          </label>
        )}

        <label className="personalInfo-label">Phone Number</label>
        <input
          className="personalInfo-input"
          type="number"
          placeholder="e.g. +1 234 567 890"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{
            border: ` ${
              labelPhone ? "1px solid red" : "1px solid hsl(229, 24%, 87%)"
            }`,
          }}
        />
        {labelPhone && (
          <label
            className="personalInfo-label error"
            style={{ color: "red", marginBottom: "10px", fontWeight: "500" }}
          >
            * Phone number is also required
          </label>
        )}
      </form>
      {/* {curStep === null || <Button />} */}
    </section>
  );
}
