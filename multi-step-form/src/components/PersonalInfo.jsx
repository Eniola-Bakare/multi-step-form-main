export default function PersonalInfo({
  name,
  email,
  number,
  setName,
  setNumber,
  setEmail,

  labelEmail,
  labelName,
  labelPhone,
}) {
  return (
    <section className="personalInfo-container">
      <div className="personalInfo-title-div">
        <h1 className="personalInfo-title">Personal Info</h1>
        <p className="personalInfo-text">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="personalInfo-Form">
        <label className="personalInfo-label">Name</label>
        <input
          className="personalInfo-input"
          type="text"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            border: ` ${
              labelName ? "1px solid red" : "1px solid hsl(229, 24%, 87%)"
            }`,
          }}
        />
        {labelName && (
          <label
            className="personalInfo-label error"
            style={{ color: "red", marginBottom: "10px", fontWeight: "500" }}
          >
            * First Name and Last Name is required.
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
    </section>
  );
}