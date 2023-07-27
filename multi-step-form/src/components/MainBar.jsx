import AddOn from "./AddOn";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import Thanks from "./Thanks";

export default function MainBar(){
  return(
    <main className="main">
      {/* <PersonalInfo /> */}
      {/* <SelectPlan /> */}
      {/* <AddOn /> */}
      <Summary />
      {/* <Thanks /> */}
    </main>
  )
}