import React from "react";
import DataInputForm from "./DataInputForm";

const RentOrOwnQuestion = ({ nextQuestion }) => {
  return (
    <DataInputForm
      question="Do you rent or own your home?"
      options={[
        { value: "rent", label: "Rent" },
        { value: "own", label: "Own" },
        { value: "custom", label: "Custom Option" },
      ]}
      inputType="radio"
      nextQuestion={nextQuestion}
    />
  );
};

export default RentOrOwnQuestion;
