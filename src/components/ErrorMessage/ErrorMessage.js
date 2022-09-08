import React from "react";

function ErrorMessage({ errorData }) {
  return (
    <div className="error-wrapper">
      <div className="error-wrapper__code">Code: {errorData.code}</div>
      <div className="error-wrapper__message">Message: {errorData.message}</div>
    </div>
  );
}

export default ErrorMessage;
