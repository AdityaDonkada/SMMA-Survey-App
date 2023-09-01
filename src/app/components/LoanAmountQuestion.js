import React from "react";
import DataInputForm from "./DataInputForm";

const LoanAmountQuestion = ({ nextQuestion }) => {
  return (
    <DataInputForm
      question="How much would you like to borrow?"
      options={[
        { value: "under_100k", label: "Under $100k" },
        { value: "100k_200k", label: "$100k - $200k" },
        { value: "200k_300k", label: "$200k - $300k" },
        { value: "300k_400k", label: "$300k - $400k" },
        { value: "over_400k", label: "Over $400k" },
      ]}
      inputType="radio"
    />
  );
};

export default LoanAmountQuestion;
