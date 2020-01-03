import React from 'react';
import styled from "@emotion/styled";

const InputComponent = styled.input`
  border: 0.125rem solid transparent;
  border-bottom-color: #eee;
  width: 100%;
  padding: 0.5rem 0;

  &[data-error] {
    border-bottom-color: red;
  }

  &[disabled] {
    background-color: #eee;
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export default function Input({ onChange, onBlur, error, ...restProps }) {
  return (
    <InputComponent
      {...restProps}
      data-error={!!error || undefined}
      onChange={onChange ? ({ target }) => onChange(target.value) : undefined}
      onBlur={onBlur ? ({ target }) => onBlur(target.value) : undefined}
    />
  )
}