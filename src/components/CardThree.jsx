import React, { useContext, useState } from "react";
import "./CardTwo.css";
import FormContextProvider from "../context/FormContextProvider";
import "./slider.css";
import "./CardThree.css";

export default function CardThree() {
  const { useForm } = useContext(FormContextProvider);
  const [values, errors, handleChange] = useForm();
  return (
    <form className="card flex">
      <div className="above-header"></div>
      <h3 className="card-title">Pick add-ons</h3>
      <p className="fill-info">Add-ons help enhance your gaming experience</p>
      <div className="below-fill-info"></div>
      <div className="add-ons flex flex-col">
        <div className="add-on-option">
          <label className="checkbox">
            <input
              type="checkbox"
              className="radio"
              value="2"
              //   checked={}
              name="larger-storage"
            />
            <span class="checkmark"></span>
            <div className="flex-1 flex justify-between items-center">
              <div className="add-on-options-desc flex flex-col">
                <p className="fw-700 text-color-marine-blue fs-875">Online Service</p>
                <p className="text-color-cool-gray fs-75 fw-400">
                  Access to multiplayer games
                </p>
              </div>
              <p className="text-color-purplish-blue fs-75">+$1/mo</p>
              {/* {yearly && <p className="text-color-purplish-blue fw-75">+$10/yr</p>} */}
            </div>
          </label>
        </div>
        <div className="add-on-option">
        <label className="checkbox">
            <input
              type="checkbox"
              className="radio"
              value="2"
              //   checked={}
              name="larger-storage"
            />
            <span class="checkmark"></span>
            <div className="flex-1 flex justify-between items-center">
              <div className="add-on-options-desc flex flex-col">
                <p className="fw-700 text-color-marine-blue fs-875">Larger Storage</p>
                <p className="text-color-cool-gray fs-75 fw-400">
                  Extra 1TB of cloud save
                </p>
              </div>
              <p className="text-color-purplish-blue fs-75">+$2/mo</p>
              {/* {yearly && <p className="text-color-purplish-blue fw-75">+$20/yr</p>} */}
            </div>
          </label>
        </div>
        <div className="add-on-option">
        <label className="checkbox">
            <input
              type="checkbox"
              className="radio"
              value="2"
              //   checked={}
              name="larger-storage"
            />
            <span class="checkmark"></span>
            <div className="flex-1 flex justify-between items-center">
              <div className="add-on-options-desc flex flex-col">
                <p className="fw-700 text-color-marine-blue fs-875">Customizable Profile</p>
                <p className="text-color-cool-gray fs-75 fw-400">
                  Custom Theme on your profile
                </p>
              </div>
              <p className="text-color-purplish-blue fs-75">+$2/mo</p>
              {/* {yearly && <p className="text-color-purplish-blue fw-75">+$20/yr</p>} */}
            </div>
          </label>
        </div>
      </div>
    </form>
  );
}
