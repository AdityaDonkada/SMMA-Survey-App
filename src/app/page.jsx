"use client";
import React, { useState } from "react";
import EmailQuestion from "./components/EmailQuestion";
import FullNameQuestion from "./components/FullNameQuestion";
import PhoneNumberQuestion from "./components/PhoneNumberQuestion";
import RentOrOwnQuestion from "./components/RentOrOwnQuestion";
import LoanRequestTimingQuestion from "./components/LoanRequestTimingQuestion";
import CreditScoreQuestion from "./components/CreditScoreQuestion";
import LoanAmountQuestion from "./components/LoanAmountQuestion";
import HomePurchaseQuestion from "./components/HomePurchaseQuestion";
import app from "./config";
import "./globals.css"

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const questionComponents = [
    <EmailQuestion nextQuestion={handleNextQuestion} />,
    <FullNameQuestion nextQuestion={handleNextQuestion} />,
    <PhoneNumberQuestion nextQuestion={handleNextQuestion} />,
    <RentOrOwnQuestion nextQuestion={handleNextQuestion} />,
    <LoanRequestTimingQuestion nextQuestion={handleNextQuestion} />,
    <CreditScoreQuestion nextQuestion={handleNextQuestion} />,
    <LoanAmountQuestion nextQuestion={handleNextQuestion} />,
    <HomePurchaseQuestion nextQuestion={handleNextQuestion} />,
  ];

  return (
    <main>
      <div>{questionComponents[currentQuestion]}</div>
    </main>
  );
};

export default Page;
