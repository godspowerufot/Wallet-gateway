import "./App.css";
import "./component/wallet.css";
import Wallet from "./component/wallet";
import TransactionPage from "./component/transact.jsx";
import Fullpage from "./component/pageModel/fullpage";
function App() {
  return (
    <div className="App">
      <Wallet />

      <TransactionPage />
    </div>
  );
}

export default App;
