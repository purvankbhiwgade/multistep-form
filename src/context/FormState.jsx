import React, { useState } from "react";
import FormContextProvider from "./FormContextProvider";

function FormState(props) {
  const [page, setPage] = useState(1);
  const [pageOne, setPageOne] = useState("invalid");
  const [pageTwo, setPageTwo] = useState("invalid");
  const [pageThree, setPageThree] = useState("invalid");
  const [pageFour, setPageFour] = useState("invalid");
  const [plans, setPlans] = useState("")

  const validateAll = () => {
    if (values.name === "" || values.email === "" || values.phone === "") {
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (page === 1) {
      if (!validateAll()) {
        setErrors({
          name: "This field is required",
          email: "This field is required",
          phone: "This field is required",
        });
        return;
      }
    }
      setPage(page + 1);
  };

  const handleBack = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };

  const handleConfirm = () => {
    console.log("handling confirm");
  };

  const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target)
    event.target.focus()
    setPlans(event.target.value)

  }

  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  function useForm() {
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      validate(event, name, value);
      setValues({
        ...values,
        [name]: value,
      });
    };

    const validate = (event, name, value) => {
      switch (name) {
        case "name":
          if (value.length === 0) {
            setErrors({
              ...errors,
              name: "This field is required",
            });
          } else {
            // set the error state empty or remove the error for username input
            setErrors({ ...errors, name: "" });
          }
          break;
        case "email":
          if (value.length === 0) {
            setErrors({
              ...errors,
              email: "This field is required",
            });
          } else {
            setErrors({ ...errors, email: "" });
          }
          break;
        case "phone":
          if (value.length === 0) {
            setErrors({
              ...errors,
              phone: "This field is required",
            });
          } else {
            setErrors({ ...errors, phone: "" });
          }
          break;
        default:
          break;
      }
    };

    return [values, errors, handleChange];
  }

  return (
    <FormContextProvider.Provider
      value={{ page, handleBack, handleNext, handleConfirm, useForm, handleClick, plans }}
    >
      {props.children}
    </FormContextProvider.Provider>
  );
}

export default FormState;
