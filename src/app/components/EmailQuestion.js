import React from "react";
import DataInputForm from "./DataInputForm";

const EmailQuestion = ({ nextQuestion }) => {
  return (
    <DataInputForm
      question="What is your email address?"
      nextQuestion={nextQuestion}
      inputType="text"
    />
  );
};

export default EmailQuestion;
