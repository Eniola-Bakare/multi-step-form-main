import MainBar from "./components/MainBar";
import SideBar from "./components/SideBar";
import { FormContextProvider } from "./contexts/FormContext";

function App() {
  return (
    <div className="app">
      <FormContextProvider>
        <SideBar />
        <MainBar />
      </FormContextProvider>
    </div>
  );
}

export default App;
