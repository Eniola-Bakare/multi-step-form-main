export default function PersonalInfo(){
  return(
    <section className="personalInfo-container">
      <div className="personalInfo-title-div">
        <h1 className="personalInfo-title">Personal Info</h1>
        <p className="personalInfo-text">Please provide your name, email address, and phone number.</p>
      </div>

      <form className="personalInfo-Form">
        <label className="personalInfo-label" >Name</label>
        <input className="personalInfo-input" type="text" placeholder="e.g. Stephen King" />
        
        <label className="personalInfo-label" >Email Address</label>
        <input className="personalInfo-input" type="email" placeholder="e.g. Stephenking@lorem.com" />

        <label className="personalInfo-label" >Phone Number</label>
        <input className="personalInfo-input" type="number" placeholder="e.g. +1 234 567 890" />

      </form>
      
    </section>
  )
}