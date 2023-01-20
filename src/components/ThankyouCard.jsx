import React from "react";
import "./Card.css";

export default function ThankyouCard() {
  return (
    <div className="thank-you card flex flex-col items-center">
      <img src="icon-thank-you.svg" />
      <p className="fw-700 text-color-marine-blue fs-1-500">Thank you!</p>
      <p className="fw-400 text-color-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
