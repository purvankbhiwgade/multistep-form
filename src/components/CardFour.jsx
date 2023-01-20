import React, { useContext } from "react";
import "./Card.css";
import FormContextProvider from "../context/FormContextProvider";

export default function CardFour() {
  const { useForm } = useContext(FormContextProvider);
  const [values, errors, handleChange] = useForm();
  return (
    <form className="card flex fs-875">
      <div className="above-header"></div>
      <h3 className="card-title">Finishing up</h3>
      <p className="fill-info">
        Double check everything looks OK before confirming.
      </p>
      <div className="below-fill-info"></div>
      <div className="list flex flex-col">
        <div className="total flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <p className="fw-500 ls-1perc">Arcade Monthly</p>
            <a href="/">Change</a>
          </div>
          <span className="text-color-marine-blue fw-700">$9/mo</span>
        </div>
        <div className="total-add-ons flex flex-col">
          <div className="flex justify-between">
            <span className="text-color-cool-gray">Online service</span>
            <span className="text-color-marine-blue">$1/mo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-color-cool-gray">Larger Storage</span>
            <span className="text-color-marine-blue">$2/mo</span>
          </div>
        </div>
      </div>
      <div className="total-price flex justify-between items-center">
        <span className="text-color-cool-gray">Total (per month)</span>
        <span className="final-price text-color-purplish-blue fw-500">$12/mo</span>
      </div>
    </form>
  );
}
