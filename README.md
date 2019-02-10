
### Welcome

For your craft demonstration, we ask you to implement a small Single Page Application using React. Below you will find the [requirements](#exercise-requirements). Expect to demonstrate your application and talk through your code during the next interview.

We invite you to use your own laptop for the craft demo. If you do not have or are unable to use your own computer, you will be asked to implement this exercise on a computer provided by us during the next interview. Please contact your recruiter to let us know if this is the case.

### Schedule

**Use your time wisely**. It would be better to deliver two working features than ten half-working ones.

### Exercise Requirements

Develop an Interview Wizard Application (IWA). The purpose of the IWA is to ask the user one or more questions in order to learn more about them. The expectation is that each question is displayed on its own screen/view inside the wizard. In addition, it is also expected that the wizard can be embedded on a page easily in widget-type form; thus, this widget must assume that it can’t control the page that it’s on. After the user has responded to all three questions, all questions and responses should be displayed to the user.
The following are specific requirements:

  - Coding:
    - Build using the provided React JS boilerplate
    - Should be **mobile responsive**
  - How it should work:
    - Ask three questions, one question per screen
    - The user should be able to give their response through an input field
    - The question ordering should be easy to change
    - After the the last question, the user should be taken to a final summary page with all the questions and responses displayed
  - If you have time:
    - The user should be able to revisit previous questions
    - Each question in the wizard should display one of the provided images
      - https://github.com/pabo/react-app-interview/raw/master/images/icon-accurate-retina.png
      - https://github.com/pabo/react-app-interview/raw/master/images/icon-max-refund-retina.png
      - https://github.com/pabo/react-app-interview/raw/master/images/icon-audit-support-retina.png
    - add CSS styling

---

### Design Specs

> See the design spec in [./specs/widget_spec.png](/specs/widget_spec.png)

#### Questions Screen

- Widget should be vertically and horizontally centered in screen
- Widget max-width is 700px
- Internal elements should be horizontally centered (image, question, input)
  - Question and Input should not exceed 500px in width
- Nav buttons should left aligned and right aligned respectfully to the width of the above elements
- Image is dynamic. Each question should show a different image
  - The image is to be done as a background-image, not an <img />
  - Find the images in [./images](/images)
- Remove the "back" button for first question


#### Responses Screen

- List out the questions and responses
- No need for any input
- No "next" button
- Remove the image, or add a custom hero image

---

### Loaner MacBook Pro

If you require a loaner, we will provide a MacBook Pro for your use. This machine will have some commonly used tools. Feel free to install anything else you need to be productive. Installed already are:
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
