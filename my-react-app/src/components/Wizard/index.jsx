import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Question from "../Question";
import Button from "../Button";
import Summary from "../Summary";

const WizardContainer = styled.div`
  padding: 80px 16px;
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  & > * {
    width: 100%;
  }
`;

const WizardNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: auto;
`;

export default function Wizard({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const updateAnswer = useCallback(value => {
    if (value === answers[questionIndex]) return;

    const answersCopy = [...answers];

    answersCopy[questionIndex] = value;

    setAnswers(answersCopy);
  }, [answers, setAnswers, questionIndex]);

  const isFirst = questionIndex === 0;
  const isSummary = questionIndex === questions.length;

  // @TODO transition/animation on page change

  return (
    <WizardContainer>
      {isSummary ? (
        <Summary answers={answers} />
      ) : (
        <Question key={questionIndex} {...questions[questionIndex]} value={answers[questionIndex]} updateAnswer={updateAnswer} />
      )}

      <WizardNavigation>
        <Button disabled={isFirst} onClick={() => setQuestionIndex(questionIndex - 1)}>Previous</Button>

        {/* @TODO Are all inputs required? If so disable button if !answers[questionIndex] */}
        {!isSummary && (
          <Button onClick={() => setQuestionIndex(questionIndex + 1)}>Next</Button>
        )}
      </WizardNavigation>
    </WizardContainer>
  );
}