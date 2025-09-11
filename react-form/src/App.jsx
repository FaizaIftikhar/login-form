import LoginForm from "./LoginForm";
import React from "react"; 
import UpgradeLoginForm from "./UpgradeLoginForm";

function App() {
  return (
    <React.Fragment>
      <LoginForm />
      <UpgradeLoginForm/>
    </React.Fragment>
  );
}

export default App;
