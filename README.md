### Welcome

Welcome to the craft demonstration portion of your interview! You will be asked to demonstrate your web development talent by implementing an application based upon the below requirements.

The machine provided to you has some commonly used tools. Feel free to install anything else you need to be productive. Installed already are:
  - homebrew (`brew install foo`)
  - npm (`npm install bar`)
  - create-react-app (`create-react-app`)
  - yeoman's create-redux-app (`yo create-redux-app`)
  - atom, vscode, and sublime
  - chrome, firefox, and safari

You may start from scratch, or may decide to **clone this repo**, which has been bootstrapped with `create-react-app`:
  - `git clone https://github.com/pabo/react-app-interview.git`
  - `cd react-app-interview/my-react-app`
  - `npm install`
  - `npm start`


### Exercise Requirements

You’ve been given the task of developing an Interview Wizard Application (IWA). The purpose of the IWA is to ask people one or more questions in order to learn more about them. The expectation is that each question is displayed on its own screen inside the wizard. In addition, it is also expected that the wizard can be embedded on a page easily in widget-type form; thus, this widget must assume that it can’t control the page that it’s on. After the user has answered all questions, all answers should be displayed to the user (this will be known as the “display screen”). After the user has navigated to the screen following the display screen, all questions and user answers should be persisted via a provided API. The following are specific requirements:

  - Coding:
    - It is highly suggested to use the React JS framework
    - A CSS pre-processor can be used, but it’s not required (e,g, Less, Sass)
    - Must be mobile responsive
  - How it should work:
    - Ask three questions, one question per wizard screen
    - The question ordering should be easy to change
    - Each question in the wizard should display one of the provided images
      - https://github.com/pabo/react-app-interview/raw/master/images/icon-accurate-retina.png
      - https://github.com/pabo/react-app-interview/raw/master/images/icon-max-refund-retina.png
      - https://github.com/pabo/react-app-interview/raw/master/images/icon-audit-support-retina.png
    - The user should be able to give their answer through an input field.
    - After the user inputs answers for all 3 questions, they should be taken to a final summary page with all the questions and answers displayed

### Schedule

Expect a short introduction to the team, followed by 45 minutes of developing your application and discussion. At the end of the session, you will have an opportunity to ask the team any questions you may have.
