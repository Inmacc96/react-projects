import { QuoterProvider } from "./context/QuoterProvider";
import InsuranceApp from "./components/InsuranceApp";

function App() {
  return <QuoterProvider>
    <InsuranceApp />
  </QuoterProvider>
}

export default App;
