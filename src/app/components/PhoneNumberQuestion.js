import React from "react";
import DataInputForm from "./DataInputForm";

const PhoneNumberQuestion = ({ nextQuestion }) => {
  return (
    <DataInputForm
      question="What is your phone number?"
      nextQuestion={nextQuestion}
    />
  );
};

export default PhoneNumberQuestion;
