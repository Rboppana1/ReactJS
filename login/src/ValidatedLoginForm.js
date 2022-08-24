import React from "react";
import auth from "./auth";

const ValidatedLoginForm = props => {
   return (
        <form>
        <h1>STROS UI LOGIN</h1>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button onClick={() => {
          auth.login(() => {
            props.history.push("/page1");
          });
        }}
      >Login
          </button>
        </form>
      );
 };
export default ValidatedLoginForm;


