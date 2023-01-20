import React, { useContext } from "react";
import "./App.css";
import Steps from "./components/Steps";
import CardOne from "./components/CardOne";
import FormContextProvider from "./context/FormContextProvider";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import CardFour from "./components/CardFour";
import ThankyouCard from "./components/ThankyouCard";

export default function App() {
  const renderPage = () => {
    switch (page) {
      case 1:
        return <CardOne />;
        break;
      case 2:
        return <CardTwo />;
        break;
      case 3:
        return <CardThree />;
        break;
      case 4:
        return <CardFour />;
        break;
      default:
        <ThankyouCard />;
        break;
    }
  };

  const { page, handleBack, handleNext, handleConfirm } =
    useContext(FormContextProvider);
  return (
    <div className="main-card">
      <div className="sidebar">
        <div className="form-steps">
          <div className="steps">
            <Steps value={1} state={page === 1 ? "on" : "off"} />
            <div className="step-info">
              <p className="hidden small-info">step 1</p>
              <p className="hidden big-info">your info</p>
            </div>
          </div>
          <div className="steps">
            <Steps value={2} state={page === 2 ? "on" : "off"} />
            <div className="step-info">
              <p className="hidden small-info">step 2</p>
              <p className="hidden big-info">select plan</p>
            </div>
          </div>
          <div className="steps">
            <Steps value={3} state={page === 3 ? "on" : "off"} />
            <div className="step-info">
              <p className="hidden small-info">step 3</p>
              <p className="hidden big-info">add-ons</p>
            </div>
          </div>
          <div className="steps">
            <Steps value={4} state={page === 4 ? "on" : "off"} />
            <div className="step-info">
              <p className="hidden small-info">step 4</p>
              <p className="hidden big-info">summary</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-item-one"></div>
      <div className="main-content">
        <div className="form">
          {renderPage()}

          {/* <CardOne /> */}
          {/* <CardTwo /> */}
          {/* <CardThree /> */}
          {/* <CardFour /> */}
          {/* <ThankyouCard /> */}
          <div className="above-form-btn" style={page===5?{ padding: "5% 0 0 0" }: null}></div>
          <div className={`form-btn ${page == 1 ? "justify-end" : null}`}>
            {page < 5 && page > 1 && (
              <button onClick={handleBack} className={`go-back-btn`}>
                Go Back
              </button>
            )}
            {page < 4 && (
              <button onClick={handleNext} className={`next-btn`}>
                Next Step
              </button>
            )}
            {page === 4 && (
              <button onClick={handleConfirm} className={`next-btn`}>
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex-item-two"></div>
    </div>
  );
}
