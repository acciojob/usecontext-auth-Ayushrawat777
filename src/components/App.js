import React, { createContext, useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";
export const AuthContext=createContext();
const App = () => {
  const [data, setdata] = useState(false);
  return (
    <div>
      <AuthContext.Provider value={{data,setdata}}>
        <Auth />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
