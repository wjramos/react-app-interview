import React from 'react';
import { Global, css } from '@emotion/core'

import QUESTIONS from './constants/questions';
import Wizard from "./components/Wizard";

const GLOBAL_STYLES = css`
  html {
      box-sizing: border-box;
  }
  
  html,
  body,
  #root {
      min-height: 100vh;
      width: 100%;
      position: relative;
  }
  
  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }
  
  body {
      font-family: helvetica neue, helvetica, verdana, sans-serif;
      margin: 0;
      font-size: 16px;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
  }
  
  ol,
  ul {
      list-style: none;
  }
  
  ul {
      padding: 0;
  }
  
  img {
      max-width: 100%;
      height: auto;
  }
  
  button,
  input,
  textarea,
  select {
    appearance: none;
    outline: none;
    border: 1px solid black;
    background: white;
    
    &[disabled] {
      background: #ccc;
      color: #333;
    }
  }
`;

export default function App() {
  return (
    <div>
      <Global styles={GLOBAL_STYLES} />
      <Wizard questions={QUESTIONS} />
    </div>
  );
}

