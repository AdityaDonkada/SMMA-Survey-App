import React from "react";
import DataInputForm from "./DataInputForm";

const FullNameQuestion = ({ nextQuestion }) => {
  return (
    <DataInputForm
      question="What is your full name?"
      nextQuestion={nextQuestion}
      inputType="text"
    />
  );
};

export default FullNameQuestion;
