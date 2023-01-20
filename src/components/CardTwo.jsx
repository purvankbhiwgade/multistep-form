import React, { useContext, useState } from "react";
import "./Card.css";
import "./CardTwo.css";
import FormContextProvider from "../context/FormContextProvider";
import "./slider.css";

export default function CardTwo() {
  const { useForm, handleClick, plans } = useContext(FormContextProvider);
  const [values, errors, handleChange ] = useForm();
  const [yearly, setYearly] = useState(false);

  const handleToggle = (event) => {
    setYearly(!yearly)
  }

 
  return (
    <form className="card flex">
      <div className="above-header"></div>
      <h3 className="card-title">Select your plan</h3>
      <p className="fill-info">
        You have the option of monthly or yearly billing.
      </p>
      <div className="below-fill-info"></div>
      <div className="plan-options">
        <button className={`options flex ${plans === "arcade"? "outline": null}`} onClick={handleClick} type="button" value="arcade">
          <img src="icon-arcade.svg" />
          <div className="option flex space-between">
            <p className="fw-700 text-color-marine-blue">Arcade</p>
            {!yearly && <div className="price fs-875 fw-500 text-color-cool-gray">$9/mo</div>}
            {yearly && (
              <div className="yearly">
                <div className="price fw-500 fs-875 text-color-cool-gray">$90/yr</div>
                <div className="offer fw-500 fs-75 text-color-marine-blue">2 months free</div>
              </div>
            )}
          </div>
        </button>
        <button className={`options flex ${plans === "advanced"? "outline": null}`} onClick={handleClick} type="button" value="advanced">
          <img src="icon-advanced.svg" />
          <div className="option flex space-between">
            <p className="fw-700 text-color-marine-blue">Advanced</p>
            {!yearly && <div className="price fw-500 fs-875 text-color-cool-gray">$12/mo</div>}
            {yearly && (
              <div className="yearly">
                <div className="price fw-500 fs-875 text-color-cool-gray">$120/yr</div>
                <div className="offer fw-500 fs-75 text-color-marine-blue">2 months free</div>
              </div>
            )}
          </div>
        </button>
        <button className={`options flex ${plans === "pro"? "outline": null}`} onClick={handleClick} type="button" value="pro">
          <img src="icon-pro.svg" />
          <div className="option flex space-between">
            <p className="fw-700 text-color-marine-blue">Pro</p>
            {!yearly && <div className="price fw-500 fs-875 text-color-cool-gray">$15/mo</div>}
            {yearly && (
              <div className="yearly">
                <div className="price fw-500 fs-875 text-color-cool-gray">$150/yr</div>
                <div className="offer fw-500 fs-75 text-color-marine-blue">2 months free</div>
              </div>
            )}
          </div>
        </button>
      </div>
      <div>
        <div className="plan-toggle">
          <span className={`plan ${yearly ? "text-color-cool-gray" : "text-color-marine-blue"}`}>Monthly</span>
          <label className="switch">
            <input type="checkbox" onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <span className={`plan ${!yearly ? "text-color-cool-gray" : "text-color-marine-blue"}`}>Yearly</span>
        </div>
      </div>
    </form>
  );
}
