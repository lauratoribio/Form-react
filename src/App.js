
import './App.css';
import React, {useState} from "react";
import AccountForm from "./components/AcountForm/AcountForm"

function App() {

  //Creamos un nuevo estado de componente
  const [profiles, setProfiles] = useState()

  return (
    <div className="App">
      <AccountForm />
    </div>
  );
}

export default App;
