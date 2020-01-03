import React from 'react';
import styled from "@emotion/styled";

// @TODO implement button themes
// @TODO create color scheme constants file
// @TODO create spacing grid constants file or base scale
const BaseButton = styled.button`
	font-size: 1rem;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	transition: color 0.4s, background-color 0.4s, border-color 0.4s;
	border: 1px solid transparent;
	display: inline-flex;
	justify-content: center;
	align-items: center;

  background-color: blue;
  color: white;
	
	&[disabled] {
	  background: #ccc;
	  color: #333;
	}
`;

export default function Button(props) {
  return (
    <BaseButton {...props} />
  )
}