import React, { useContext } from "react";
import "./Card.css";
import FormContextProvider from "../context/FormContextProvider";

export default function CardOne() {
  const { useForm } = useContext(FormContextProvider);
  const [values, errors, handleChange] = useForm();
  return (
    <form className="card flex">
      <div className="above-header"></div>
      <h3 className="card-title">Personal info</h3>
      <p className="fill-info">
        Please provide your name, email, address, and phone number.
      </p>
      <div className="below-fill-info"></div>
      <div>
        <div className="flex space-between">
          <label className="fs-75" htmlFor="name">Name</label>
          {errors.name !== "" && (
            <span className="text-red">{errors.name}</span>
          )}
        </div>
        <input
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          onChange={handleChange}
          value={values.name}
          className={`input ${errors.name === "" ? null : "error"}`}
        />
      </div>
      <div>
        <div className="flex space-between">
          <label className="fs-75" htmlFor="email">Email Address</label>
          {errors.email !== "" && (
            <span className="text-red">{errors.email}</span>
          )}
        </div>
        <input
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleChange}
          value={values.email}
          className={`input ${errors.email === "" ? null : "error"}`}
        />
      </div>
      <div>
        <div className="flex space-between">
          <label className="fs-75" htmlFor="phone">Phone Number</label>
          {errors.phone !== "" && (
            <span className="text-red">{errors.phone}</span>
          )}
        </div>
        <input
          type="text"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          onChange={handleChange}
          value={values.phone}
          className={`input ${errors.phone !== "" ? "error" : null} remove-margin`}
        />
      </div>
    </form>
  );
}
