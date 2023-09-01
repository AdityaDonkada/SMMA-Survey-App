import React from "react";
import DataInputForm from "./DataInputForm";

const LoanRequestTimingQuestion = ({ nextQuestion }) => {
  return (
    <DataInputForm
      question="When are you planning to request home loan benefits?"
      options={[
        { value: "within_month", label: "Within a month" },
        { value: "2_6_months", label: "In 2-6 months" },
        { value: "more_than_6_months", label: "In more than 6 months" },
        { value: "not_sure", label: "Not sure" },
      ]}
      inputType="radio"
      nextQuestion={nextQuestion}
    />
  );
};

export default LoanRequestTimingQuestion;
