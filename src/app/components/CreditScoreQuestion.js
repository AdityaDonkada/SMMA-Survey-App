import React from "react";
import DataInputForm from "./DataInputForm";

const CreditScoreQuestion = () => {
  return (
    <DataInputForm
      question="What is your estimated credit score?"
      options={[
        { value: "300_579", label: "300-579" },
        { value: "580_669", label: "580-669" },
        { value: "670_749", label: "670-749" },
        { value: "750_850", label: "750-850" },
      ]}
      nextQuestion="/survey/loanamount"
      inputType="radio"
    />
  );
};

export default CreditScoreQuestion;
