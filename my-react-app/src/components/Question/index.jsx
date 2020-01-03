import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import Input from "../Input";

const QuestionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 500px;
  margin: auto;
  
  & > * {
    margin-bottom: 32px;
  }
`;

export default function Question({ question, image, updateAnswer, placeholder = 'Enter answer' }) {
  return (
    <QuestionWrapper>
      {image && (<img key={image} src={`./images/${image}`} alt="" />)}

      {/* @TODO create base typography components with established typographic scale */}
      <p>{question}</p>

      <Input onBlur={updateAnswer} placeholder={placeholder} />
    </QuestionWrapper>
  )
}

Question.propTypes = {
  image: PropTypes.string,
  question: PropTypes.string,
  placeholder: PropTypes.string,
  updateAnswer: PropTypes.func.isRequired,
};