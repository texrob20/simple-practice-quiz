## Code Quiz
This is the Web APIs Challenge: Code Quiz for the UTSA Coding Bootcamp.  The code quiz contains javascript functions to execute a quiz, record results and display stored scores.

The Code Quiz must meet the following criteria:

GIVEN I am taking a code quiz:

- WHEN I click the start button THEN a timer starts and I am presented with a question
- WHEN I answer a question THEN I am presented with another question
- WHEN I answer a question incorrectly THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0 THEN the game is over
- WHEN the game is over THEN I can save my initials and score

In order to meet the required criteria, the site executes a four question quiz and stores the scores.

## Built with:
- Javascript
- CSS
- HTML

## High Scores
The function presentScore adds the user's initials and score into a saved array for each.  The saved scores and then saved in localStorage.  When the user clicks the High Scores buttons, all the saved scores are displayed through the function loadScore.

## Execute Quiz
When the user clicks the Start Quiz button, the pre-Quiz information is removed and the first question appears.  The user will click on an answer to make their selection.  The user is alerted if they are wrong or correct before moving to the next question.  If the user answers correctly they receive 10 points.  If the user answer incorrectly, their time is reduced by 10 seconds.  When the user has answered all question or time has expired, the user is prmopted to enter their initials and save their score.

The question is displayed with four options.  When the user hovers over an answer, that answer changes background color to alert the user.  The function displayQuestion listens for which option the user selects and the varible Clicked is executed when an option is selected.  The varible Clicked checks the selected option against the answer and takes the actions detailed above for a correct or inccorect answer.  The quiz them moves to the next question until all questions are answered or time has expired.

## Timer
The timer begins with a default time that decreases every second until it reaches zero.  If the user answers incoorectly, the timer is reduced by 10 seconds until it reaches zero.

## Retake Quiz
The user can retake the quiz by selecting the retake quiz button.

## Demo
<img src=https://github.com/texrob20/simple-practice-quiz/blob/main/assets/qiuz-demo.png>
