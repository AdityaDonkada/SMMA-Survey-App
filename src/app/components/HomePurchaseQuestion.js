import React from "react";
import DataInputForm from "./DataInputForm";

const HomePurchaseQuestion = ({ nextQuestion }) => {
  return (
    <DataInputForm
      question="Have you purchased a home?"
      options={[
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ]}
      inputType="radio"
      nextQuestion={nextQuestion}
    />
  );
};

export default HomePurchaseQuestion;
