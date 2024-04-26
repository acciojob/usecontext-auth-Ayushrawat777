import React, { useContext } from "react";
import { AuthContext } from "./App";
const Auth = () => {
  const info = useContext(AuthContext);
  const {data, setdata} = info;
  return (
    <>
      <h1>Click on the checkbox to get authenticated</h1>
      {data ? (
        <p>You are now authenticated, you can proceed</p>
      ) : (
        <p>you are not authenticated</p>
      )}

      <input
        type="checkbox"
        onClick={() => {
          setdata(!data);
        }}
      />
      <label htmlFor="">I'm not a robot</label>
    </>
  );
};

export default Auth;
