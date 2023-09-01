import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";

const DataInputForm = ({ question, options, inputType, nextQuestion }) => {
  const [inputValue, setInputValue] = useState("");

  const handleNext = async () => {
    const db = getDatabase();
    const responsesRef = ref(db, "responses");

    if (inputType === "radio") {
      const selectedOption = options.find(
        (option) => option.value === inputValue
      );
      push(responsesRef, selectedOption.label);
    } else {
      push(responsesRef, inputValue);
    }

    setInputValue("");
    nextQuestion();
  };

  return (
    <div>
      <h2>{question}</h2>
      {inputType === "radio" ? (
        <div>
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="radioOption"
                value={option.value}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : (
        <input
          type={inputType}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      <button onClick={handleNext}>Submit</button>
    </div>
  );
};

export default DataInputForm;
